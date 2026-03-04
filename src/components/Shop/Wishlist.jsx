import { useState } from "react";
import { Star, Trash2, ShoppingCart, Minus, Plus } from "lucide-react";

const productsData = [
  {
    id: 1,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: "/images/product1.png",
    qty: 1,
  },
  {
    id: 2,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: "/images/product2.png",
    qty: 1,
  },
  {
    id: 3,
    name: "Veggie Bloom Tomatoes",
    category: "Healthcare",
    stock: "2 In Stock",
    price: 27.49,
    oldPrice: 29.95,
    img: "/images/product3.png",
    qty: 1,
  },
];

export default function Wishlist() {
  const [products, setProducts] = useState(productsData);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const increase = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Product Wishlist</h2>

        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-600">
            {selected.length} items is selected
          </span>

          <button className="flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 p-4 text-sm font-semibold text-gray-600">
          <div className="col-span-2">Product</div>
          <div>Stock Status</div>
          <div>Price</div>
          <div>Quantity</div>
          <div className="text-center">Buy Action</div>
        </div>

        {/* Products */}
        {products.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-6 items-center p-4 border-t"
          >

            {/* Product */}
            <div className="col-span-2 flex items-center gap-4">
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => toggleSelect(p.id)}
              />

              <img
                src={p.img}
                className="w-16 h-16 object-contain bg-gray-100 rounded-lg p-2"
              />

              <div>
                <h4 className="font-semibold text-sm">{p.name}</h4>
                <p className="text-xs text-teal-600">{p.category}</p>

                <div className="flex items-center gap-1 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400"/>
                  ))}
                  <Star size={14} className="text-gray-300"/>
                  <span className="text-xs text-gray-400">(118)</span>
                </div>
              </div>
            </div>

            {/* Stock */}
            <div className="text-sm text-gray-700">{p.stock}</div>

            {/* Price */}
            <div>
              <span className="font-semibold">${p.price}</span>
              <span className="line-through text-gray-400 ml-2 text-sm">
                ${p.oldPrice}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center border rounded-full w-fit px-3 py-1">
              <button onClick={() => decrease(p.id)}>
                <Minus size={14}/>
              </button>

              <span className="px-3 text-sm">{p.qty}</span>

              <button onClick={() => increase(p.id)}>
                <Plus size={14}/>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold">
                Buy Now
              </button>

              <button className="flex items-center gap-2 bg-teal-700 text-white px-5 py-2 rounded-full text-sm hover:bg-teal-800">
                <ShoppingCart size={16}/>
                Add To Cart
              </button>

              <Trash2
                size={18}
                className="text-gray-400 cursor-pointer hover:text-red-500"
                onClick={() => removeItem(p.id)}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}