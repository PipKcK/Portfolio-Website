import React, { useState, useEffect } from 'react';
import { Download, Youtube, Facebook, Instagram, Pin, X, Volume2, Video, VolumeX, LucideDownloadCloud, Cookie, Play } from 'lucide-react';

function SocialDownloader() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [cookies, setCookies] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [downloadToken, setDownloadToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const CONVERT_URI = "https://api.thisisujjwal.engineer/api/smavd/convert";
  const DOWNLOAD_URI = "https://api.thisisujjwal.engineer/api/smavd/download";

  useEffect(() => {
    if (downloadToken) {
      const timeout = setTimeout(() => {
        setShowModal(false);
        setDownloadToken('');
      }, 180000); // 3 minutes

      return () => clearTimeout(timeout); // cleanup if modal closes early
    }
  }, [downloadToken]);


  useEffect(() => {
    if (url) {
      // Simple URL detection logic
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        setPlatform('Youtube');
        setSelectedFormat(null); // Reset for YouTube
      } else if (url.includes('facebook.com') || url.includes('fb.com')) {
        setPlatform('Facebook');
        setSelectedFormat('video'); // Auto-select video for non-YouTube
      } else if (url.includes('instagram.com')) {
        setPlatform('Instagram');
        setSelectedFormat('video'); // Auto-select video for non-YouTube
      } else if (url.includes('pinterest.com') || url.includes('pin.it')) {
        setPlatform('Pinterest');
        setSelectedFormat('video'); // Auto-select video for non-YouTube
      } else {
        setPlatform(null);
        setSelectedFormat(null);
      }
    } else {
      setPlatform(null);
      setSelectedFormat(null);
    }
  }, [url]);

  const getPlatformIcon = () => {
    switch (platform) {
      case 'Youtube':
        return <Youtube className="w-8 h-8 text-red-500" />;
      case 'Facebook':
        return <Facebook className="w-8 h-8 text-blue-500" />;
      case 'Instagram':
        return <Instagram className="w-8 h-8 text-pink-500" />;
      case 'Pinterest':
        return <Pin className="w-8 h-8 text-red-600" style={{ transform: 'rotate(-37deg)' }}/>;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
        if (!url) return;

        setShowModal(true);
        setIsConverting(true);
        setDownloadToken('');

        const payload = {
            url,
            cookies,
            ...(platform === 'Youtube' && selectedFormat ? { format: selectedFormat } : {})
        };
        try {
          const res = await fetch(CONVERT_URI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(payload),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.error || 'Conversion failed');
          }

          setIsConverting(false);
          setDownloadToken(data.token);
          setCookies('');
          setErrorMessage('');
        } catch (err) {
          setIsConverting(false);
          setDownloadToken('');
          setErrorMessage(err instanceof Error ? err.message : 'Unknown error');
        }
    };




  const handleCookieSubmit = () => {
    // Handle cookie submission logic here
    // console.log('Cookies submitted:', cookies);
    setShowCookieModal(false);
  };

  const isConvertEnabled = () => {
    if (platform === 'Youtube') {
      return selectedFormat !== null;
    }
    return platform !== null;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="mb-8">
			{/* Desktop: icon + full title */}
			<div className="hidden md:flex items-center justify-center">
				<Play className="w-12 h-12 text-purple-400 mr-4" />
				<h1 className="text-4xl font-bold ">
					Social Media Audio/Video Downloader
				</h1>
			</div>
			{/* Mobile: icon + SMAV'D centered together */}
			<div className="flex md:hidden justify-between items-center w-full px-4">
				{/* Left Column - Icon aligned right */}
				<div className="flex justify-end flex-1 pr-2">
					<Play className="w-10 h-10 text-purple-400" />
				</div>
				{/* Center Column - Title */}
				<div className="flex justify-center flex-1">
					<h1 className="text-3xl font-bold text-center">SMAV'D</h1>
				</div>
				{/* Right Column - Empty or placeholder */}
				<div className="flex justify-end flex-1">
					{/* Future content goes here */}
				</div>
			</div>
		</div>

        <div onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none pr-12"
                placeholder="Paste your video URL here"
                required
              />
              
              {platform && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {getPlatformIcon()}
                </div>
              )}
            </div>
            
            <button
              onClick={() => setShowCookieModal(true)}
              className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-colors duration-200 flex items-center"
              title="Add Cookies"
            >
              <Cookie className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Cookies</span>
            </button>
          </div>
          {platform && (
            <div className="bg-gray-700/50 rounded-lg p-4">
              {platform === 'Youtube' ? (
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* {getPlatformIcon()} */}
                  <Download className="w-8 h-8 text-purple-400" />
                  <div className="w-px h-6 bg-gray-400 mx-3"></div>
                  <span className="ml-3 text-lg mr-6">Download</span>
                </div>
                  <div className="flex gap-4">
                    <button
                    type="button"
                    onClick={() => setSelectedFormat('audio')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedFormat === 'audio'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                    >
                    <Volume2 className="w-4 h-4" />
                    <span className="ml-2 hidden sm:inline">Audio</span>
                    </button>

                    <button
                    type="button"
                    onClick={() => setSelectedFormat('video')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedFormat === 'video'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                    >
                    <Video className="w-4 h-4" />
                    <span className="ml-2 hidden sm:inline">Video</span>
                    </button>

                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* {getPlatformIcon()} */}
                  <Download className="w-8 h-8 text-purple-400" />
                  <div className="w-px h-6 bg-gray-400 mx-3"></div>
                  <span className="ml-3 text-lg mr-6">Download</span>
                </div>
                  {/* Only show Video button for non-YouTube platforms */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white cursor-default"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Video
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${
              isConvertEnabled()
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isConvertEnabled()}
          >
            <LucideDownloadCloud className="w-5 h-5 mr-2" />
            Convert {platform === 'Youtube' && selectedFormat ? `(${selectedFormat})` : ''}
          </button>
        </div>

        {/* Supported Platforms */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Youtube, name: 'YouTube', color: 'text-red-500' },
              { icon: Facebook, name: 'Facebook', color: 'text-blue-500' },
              { icon: Instagram, name: 'Instagram', color: 'text-pink-500' },
              { icon: Pin, name: 'Pinterest', color: 'text-red-600' }
            ].map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-700/50 rounded-lg p-4 flex flex-col items-center justify-center"
              >
                <platform.icon className={`w-8 h-8 ${platform.color} mb-2`} style={platform.name === 'Pinterest' ? { transform: 'rotate(-37deg)' } : {}}
 />
                <span className="text-sm">{platform.name}</span>
                {/* Horizontal line */}
                <hr className="w-full border-t border-gray-500 my-2" />

                {/* Icons below line */}
                <div className="flex gap-12">
                    <Video className="w-5 h-5 text-gray-400" />
                    {platform.name === 'YouTube' ? (
                    <Volume2 className="w-5 h-5 text-gray-400" />
                    ) : (
                    <VolumeX className="w-5 h-5 text-gray-400" />
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Conversion Status</h2>
                <button
                onClick={() => {
                  setShowModal(false);
                  setErrorMessage('');
                }}
                className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                <X size={24} />
                </button>
            </div>

            {isConverting ? (
              <div className="text-center">
                <p className="text-gray-300 mb-4 animate-pulse">⏳ Converting your video...</p>
              </div>
            ) : errorMessage ? (
              <div className="text-center space-y-4">
                <p className="text-red-400">❌ {errorMessage}</p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-green-400">✅ Conversion complete!</p>
                <a
                  href={`${DOWNLOAD_URI}/${downloadToken}`}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg inline-block"
                  download
                >
                  Download Now
                </a>
              </div>
            )}
            </div>
        </div>
        )}


      {/* Cookie Modal */}
      {showCookieModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Cookie className="w-6 h-6 mr-2 text-purple-400" />
                Add Cookies
              </h2>
              <button
                onClick={() => setShowCookieModal(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Why cookies are needed */}
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Why are cookies needed?</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Access private or age-restricted content</li>
                  <li>• Download content from accounts you follow</li>
                  <li>• Bypass regional and bot restrictions</li>
                  <li>• Maintain higher download success rates</li>
                </ul>
              </div>

              {/* Steps to get cookies */}
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">How to get cookies:</h3>
                <ol className="text-gray-300 space-y-2 text-sm">
                  <li><strong>1.</strong> Install a browser extension <a className='text-purple-300' href="https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc" target="_blank" rel="noopener">Get cookies.txt LOCALLY</a></li>
                  <li><strong>2.</strong> Go to the social media platform (YouTube, Instagram, etc.)</li>
                  <li><strong>3.</strong> Make sure you're logged in to your account</li>
                  <li><strong>4.</strong> Click the extension icon. Ensure that the Export Format is Netscape</li>
                  <li><strong>5.</strong> Copy the cookies text and paste it below</li>
                </ol>
              </div>

              {/* Cookie input */}
              <div>
                <label htmlFor="cookies" className="block text-sm font-medium text-gray-300 mb-2">
                  Paste your cookies here:
                </label>
                <textarea
                  id="cookies"
                  value={cookies}
                  onChange={(e) => setCookies(e.target.value)}
                  className="w-full h-32 px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm font-mono"
                  placeholder="# Netscape HTTP Cookie File
# This is a generated file! Do not edit.

.youtube.com	TRUE	/	FALSE	1234567890	session_token	abcd1234..."
                />
              </div>

              {/* Privacy note */}
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
                <p className="text-yellow-200 text-sm">
                  <strong>Privacy Note:</strong> Cookies are processed locally and never stored. Use them only for content you own or have permission to access. Avoid sharing cookies, as it may compromise your security. This service is not yet open source, so its internal handling of cookies cannot currently be verified
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCookieModal(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCookieSubmit}
                  disabled={!cookies.trim()}
                  className={`flex-1 font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    cookies.trim()
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Save Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialDownloader;