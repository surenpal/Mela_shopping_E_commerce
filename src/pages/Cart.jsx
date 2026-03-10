import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Your Cart ({totalItems} items)
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">

            {cart.map((item) => {

              const imageSrc = Array.isArray(item.images)
                ? item.images[0]?.url || item.images[0]
                : item.image || "/fallback.png";

              const subtotal = item.price * item.quantity;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                >

                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                    onError={(e) => (e.target.src = "/fallback.png")}
                  />

                  <div className="flex-1">

                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center border rounded-md text-lg font-bold hover:bg-gray-100"
                      >
                        -
                      </button>

                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-gray-900 font-medium"
                      >
                        {item.quantity}
                      </motion.span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center border rounded-md text-lg font-bold hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Subtotal */}
                  <div className="text-right">

                    <p className="font-semibold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500 mt-2 hover:underline"
                    >
                      Remove
                    </button>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Sticky Checkout Summary */}
          <div className="h-fit sticky top-24 border border-gray-200 rounded-xl p-6 shadow-sm bg-white">

            <h3 className="text-xl font-bold mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-4">
              <span>Total</span>
              <span className="font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;