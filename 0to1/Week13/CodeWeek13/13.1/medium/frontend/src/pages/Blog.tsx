export const Blog = () => (
  <div className="bg-gray-100 min-h-screen py-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="https://source.unsplash.com/random/400x250" alt="Blog" className="mb-4 rounded-md" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Blog Title</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="https://source.unsplash.com/random/400x251" alt="Blog" className="mb-4 rounded-md" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Blog Title</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="https://source.unsplash.com/random/400x252" alt="Blog" className="mb-4 rounded-md" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Blog Title</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
    </div>
  </div>
);