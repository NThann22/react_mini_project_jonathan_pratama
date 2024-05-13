import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContect";

export default function Admin() {
  const { adminOrders, removeOrderAdmin } = useContext(StoreContext);
  const [buttonVisibility, setButtonVisibility] = useState(
    Array(adminOrders.length).fill(true)
  );

  useEffect(() => {
    setButtonVisibility(Array(adminOrders.length).fill(true));
  }, [adminOrders]);

  const handleRemoveOrder = (orderIndex) => {
    removeOrderAdmin(orderIndex);
  };

  const handleButtonClick = (index) => {
    const newVisibility = [...buttonVisibility];
    newVisibility[index] = false;
    setButtonVisibility(newVisibility);
  };

  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1 className="pb-[80px] text-[88px] font-bold font-open_sans text-[#F17228]">
          Admin Panel
        </h1>
      </div>

      <h2 className="pb-8 font-bold font-open_sans text-[43px] text-[#F17228]">
        Customer Order
      </h2>
      {(!adminOrders || adminOrders.length === 0) && (
        <div className=" py-64 flex justify-center font-open_sans font-bold text-2xl">Belum ada Customer yang memesan</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-open_sans">
        {adminOrders.map((order, orderIndex) => (
          <div key={orderIndex} className="border border-gray-300 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Order #{orderIndex + 1}</h3>
            <div className="font-open_sans text-lg font-semibold">
              <p>Customer Name : {order.customerInfo ? order.customerInfo.name : 'Unknown'}</p>
            </div>
            <div className="mt-4">
              {order.orderItems.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center mb-2">
                  <p>{item.name}</p>
                  <p>{item.quantity}x</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-bold">Total Amount: Rp{order.totalAmount}</p>
              {order.customerInfo && (
                <div className="text-center text-2xl">
                  <h4 className="font-bold mb-2">Table Number</h4>
                  <p className="text-red-600 font-semibold">{order.customerInfo.tableNumber}</p>
                </div>
              )}
            </div>
            {buttonVisibility[orderIndex] && (
              <button
                onClick={() => handleButtonClick(orderIndex)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Pesanan Sudah Disajikan
              </button>
            )}
            {!buttonVisibility[orderIndex] && (
              <button
                onClick={() => handleRemoveOrder(orderIndex)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Customer Sudah Bayar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
