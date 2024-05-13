// StoreContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { menu_list } from "../utils/dataRestaurant";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // State untuk menyimpan data keranjang
  const [cartItems, setCartItems] = useState(() => {

    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });

  // State untuk menyimpan data pesanan di halaman Admin
  const [adminOrders, setAdminOrders] = useState(() => {

    const savedAdminOrders = localStorage.getItem("adminOrders");
    return savedAdminOrders ? JSON.parse(savedAdminOrders) : [];
  });

  // Menyimpan informasi pesanan untuk dibawa ke halaman checkout
  const [checkoutInfo, setCheckoutInfo] = useState(null);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Menyimpan data pesanan di halaman Admin ke local storage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("adminOrders", JSON.stringify(adminOrders));
  }, [adminOrders]);


  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };


  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1
      }));
    } else {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    }
  };


  const removeOrderAdmin = (orderIndex) => {
    const updatedOrders = [...adminOrders];
    updatedOrders.splice(orderIndex, 1);
    setAdminOrders(updatedOrders);
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = menu_list.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    menu_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    checkoutInfo, 
    setCheckoutInfo,
    adminOrders,
    setAdminOrders,
    removeOrderAdmin 
  };
  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
