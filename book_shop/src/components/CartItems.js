import React from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import CartCard from "./CartCard";
import TopBar from "./TopBar";

function CartItems() {
  const cartItems = useStoreState((state) => state.cartItems);
  const setCartItems = useStoreActions((actions) => actions.setCartItems);

  const handleRemoveCart = () => {
    const newCartItems = [];
    setCartItems(newCartItems);
  };

  return (
    <div>
      <TopBar />
      <div className="m-3">
        {cartItems.length > 0 && (
          <div className="flex justify-content-end mt-3">
            <span
              className="flex align-items-center backBtn cursor-pointer"
              onClick={handleRemoveCart}
            >
              Remove All
              <i className="pi pi-angle-double-right ml-2"></i>
            </span>
          </div>
        )}
        <CartCard />
      </div>
    </div>
  );
}

export default CartItems;
