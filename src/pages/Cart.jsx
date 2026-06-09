export default function Shop() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded shadow-sm bg-white">
          <h3 className="font-semibold text-lg">Premium Gadget</h3>
          <p className="text-gray-500">$99.99</p>
        </div>
        <div className="border p-4 rounded shadow-sm bg-white">
          <h3 className="font-semibold text-lg">Classic Wear</h3>
          <p className="text-gray-500">$49.99</p>
        </div>
      </div>
    </div>
  );
}
