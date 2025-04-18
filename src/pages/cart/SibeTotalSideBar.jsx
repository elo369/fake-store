import React from "react";
import { useCartContext } from "../../context/CartContext";

const SubTotalSidebar = () => {
  const {
    state: { cart },
  } = useCartContext();
  const cartLength = cart.length;
  const subTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div className="sm:min-w-[15rem] z-1 border-l border-l-white/10 p-6 sticky top-[3.5rem]">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{cartLength} Items</span>
        <span className="text-info">Subtotal: {subTotal} Rs</span>
        <div className="card-actions">
          <button
            onClick={() =>
              alert("Please try to implement this functionality..!!")
            }
            className="btn btn-primary btn-block"
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotalSidebar;