import React, { useState } from 'react';

const SEOForm = () => {
  const [text, setText] = useState('');
  const [seoData, setSeoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://spiralseo.onrender.com/generate-seo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setSeoData(data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">SEO Keywords and Title Generator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Loading...
            </div>
          ) : (
            'Generate SEO'
          )}
        </button>
      </form>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white" />
        </div>
      )}
      {!isLoading && seoData && (
        <div className="mt-8 bg-white rounded-md shadow-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">SEO Result</h2>
          <p className="text-lg font-semibold">Title: {seoData.title}</p>
          <p className="text-lg font-semibold mt-2">Keywords:</p>
          <ul className="list-disc list-inside">
            {seoData.keywords.map((keyword, index) => (
              <li key={index} className="ml-4">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SEOForm;