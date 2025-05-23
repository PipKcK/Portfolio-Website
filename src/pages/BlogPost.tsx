import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  excerpt: string;
  content: string;
  slug: string;
  gallery?: {
    url: string;
    caption: string;
  }[];
}

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get all markdown files
        const postFiles = import.meta.glob('../blog-posts/*.md', { as: 'raw' });
        
        // Try to load each post until we find the matching slug
        for (const [path, loader] of Object.entries(postFiles)) {
          const content = await loader();
          const parts = content.split('---');
          
          if (parts.length >= 3) {
            const frontmatter = parts[1].trim();
            const postContent = parts.slice(2).join('---').trim();
            
            // Parse frontmatter
            const metadata: Partial<BlogPost> = {};
            const lines = frontmatter.split('\n');
            
            lines.forEach(line => {
              if (line.includes(': ')) {
                const [key, ...valueParts] = line.split(': ');
                const value = valueParts.join(': ').trim();
                
                if (key === 'tags' || key === 'gallery') {
                  try {
                    metadata[key] = JSON.parse(value.replace(/'/g, '"'));
                  } catch {
                    metadata[key] = [];
                  }
                } else {
                  metadata[key as keyof BlogPost] = value;
                }
              }
            });

            // Generate slug from title
            const postSlug = metadata.title?.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');

            if (postSlug === slug) {
              setPost({
                ...metadata as BlogPost,
                content: postContent,
                slug: postSlug
              });
              break;
            }
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Failed to load blog post');
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-xl text-gray-400">Loading post...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link 
            to="/blog"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/blog"
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span>Back to Blog</span>
      </Link>

      <article>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-8">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {post.gallery.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-[480px] h-[300px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-center text-sm px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogPost;