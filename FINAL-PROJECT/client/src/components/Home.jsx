function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest mb-3 text-blue-200">
            Marketplaced Design 
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Build Professional Stock Market Price
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            The new ecommerce web design project is eye-pleasingly colorful and geometrically balanced. Instantly noticeable call-to-action button, beautiful and readable typography, solid visual hierarchy, and images demonstrating the product make this home page both beautiful and user-friendly. Stay tuned to see more!
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
              Learn More
            </button>
          </div>
        </div>

       <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8">
  
  <div className="flex items-center gap-2 mb-4">
    <div className="h-2 w-8 bg-indigo-600 rounded-full"></div>
    <h3 className="text-2xl font-bold tracking-tight">E-Commerce Dashboard</h3>
  </div>

  
  <p className="mb-3 text-gray-600 leading-relaxed">
    Centralized hub to manage <span className="font-semibold text-indigo-600">inventory, orders, and customer insights</span> — 
    built for scaling online stores, subscription boxes, or multi-vendor marketplaces.
  </p>
  <p className="text-gray-600 leading-relaxed">
    Leverage real-time analytics, automated payment reconciliation, and 
    <span className="font-medium text-gray-800"> AI-driven product recommendations</span> to boost conversion rates. 
    Fully responsive and ready for headless commerce integrations.
  </p>

  
  <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t pt-5 border-gray-100">
    <div>
      <p className="text-2xl font-bold text-indigo-700">24/7</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide">Order Sync</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-indigo-700">1.2k+</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide">SKU Managed</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-indigo-700">98.6%</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide">Fulfillment Rate</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Home;