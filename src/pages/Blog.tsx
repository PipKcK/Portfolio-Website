import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  excerpt: string;
  content?: string;
  slug: string;
}

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Dynamically import all .md files from the blog-posts directory
        const postFiles = import.meta.glob('../blog-posts/*.md', { as: 'raw' });
        
        const loadedPosts = await Promise.all(
          Object.entries(postFiles).map(async ([path, loader]) => {
            const content = await loader();
            const [frontmatter, ...contentParts] = content.split('---\n').filter(Boolean);
            
            // Parse frontmatter
            const post: Partial<BlogPost> = {};
            const lines = frontmatter.trim().split('\n');
            
            lines.forEach(line => {
              if (line.includes(': ')) {
                const [key, ...valueParts] = line.split(': ');
                const value = valueParts.join(': ').trim();
                
                if (key === 'tags') {
                  try {
                    post.tags = JSON.parse(value.replace(/'/g, '"'));
                  } catch {
                    post.tags = [];
                  }
                } else {
                  // Assign value as string for all other fields
                  (post as any)[key] = value;
                }
              }
            });

            // Generate slug from title
            if (post.title) {
              post.slug = post.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            }

            return post as BlogPost;
          })
        );

        // Sort posts by date in descending order (latest first)
        setPosts(loadedPosts
          .filter(post => post.title && post.date)
          .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
          })
        );
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
        <div className="text-center text-gray-400">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
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
              
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 flex-1">{post.excerpt}</p>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group mt-auto"
              >
                <span className="mr-2">Read More</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;