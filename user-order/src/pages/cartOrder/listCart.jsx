import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContect";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../utils/constants";
import Cooking from '../../image/cooking.png';

export default function ListCart() {
  const { setAdminOrders, setCheckoutInfo, getTotalCartAmount, cartItems, menu_list, removeFromCart, setCartItems } = useContext(StoreContext);
  const [customerInfo, setCustomerInfo] = useState({ name: "", tableNumber: "" });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [nameError, setNameError] = useState("");
  const [tableNumberError, setTableNumberError] = useState("");
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (customerInfo.name === "") {
      setNameError("Nama harus diisi");
    } else if (customerInfo.tableNumber === "") {
      setTableNumberError("Nomor meja harus diisi");
    } else if (Object.keys(cartItems).length === 0) {
      alert("Anda belum memilih apapun untuk dipesan.");
    } else {
      const confirmation = window.confirm("Apakah Anda yakin ingin melanjutkan ke checkout?");
      if (confirmation) {
        const orderItems = menu_list
          .filter(item => cartItems[item._id] > 0)
          .map(item => ({ name: item.name, quantity: cartItems[item._id] }));

        const checkoutInfo = { orderItems, totalAmount: getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10000, customerInfo };
        setCheckoutInfo(checkoutInfo);

        setAdminOrders(prevAdminOrders => [...prevAdminOrders, checkoutInfo]);

        localStorage.removeItem("cartItems");
        setCartItems({});
        setOrderSuccess(true);
      }
    }
  };

  const handleBackToHome = () => {
    navigate(PAGE_URL.HOME);
  };

  return (
    <div className="p-20">
      <div className="">
        <h1 className='pb-8 font-bold font-open_sans text-[43px] text-[#F17228]'>Pesanan Anda</h1>
        <div className="grid grid-cols-6 items-center font-open_sans font-bold text-lg">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-[#424242] w-full" />
        {menu_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-6 items-center font-open_sans text-lg my-3">
                  <img className="w-36" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rp{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cursor-pointer font-bold">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className='pt-20 pb-8 font-bold font-open_sans text-[43px] text-[#F17228]'>Customer Form</h2>
          <div className="flex flex-col gap-4">
            <input
              className="w-[334px] text-lg px-4 py-4 rounded-lg font-open_sans bg-slate-200"
              type='text'
              placeholder='Your Name'
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
            />
            {nameError !== "" && (
              <p className="text-red-500 text-sm">{nameError}</p>
            )}
            <input
              className="w-[334px] text-lg px-4 py-4 rounded-lg font-open_sans bg-slate-200"
              type='number'
              placeholder='Your Table Number'
              value={customerInfo.tableNumber}
              onChange={(e) => setCustomerInfo({ ...customerInfo, tableNumber: e.target.value })}
            />
            {tableNumberError !== "" && (
              <p className="text-red-500 text-sm">{tableNumberError}</p>
            )}
          </div>
        </div>
        <div>
          <h2 className='pt-20 pb-8 font-bold font-open_sans text-[43px] text-[#F17228]'>Total Cart</h2>
          <div className='flex-1 flex flex-col gap-3 font-open_sans text-2xl p-4 mb-8'>
            <div className="flex justify-between">
              <p className="font-bold">Sub Total</p>
              <p>Rp{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Service Charge</p>
              <p>Rp{getTotalCartAmount() === 0 ? 0 : 10000}</p>
            </div>
            <hr className="border-[#424242] w-full my-3" />
            <div className="flex justify-between">
              <b>Total</b>
              <b className="text-red-500">Rp{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10000}</b>
            </div>
          </div>
          {orderSuccess && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-xl text-center flex flex-col items-center">
              <p className="text-6xl font-open_sans font-bold text-green-500 mb-8">Pesananmu Berhasil Dibuat.</p>
              <img src={Cooking} alt="" className="w-80 mb-8"/>
              <p className="text-xl font-open_sans text-black mb-8">Silahkan mengunggu, pesananmu sedang dimasak dan akan diantarkan ke mejamu.</p>
              <Button variant="primary" onClick={handleBackToHome}>Back to Home</Button>
            </div>
          </div>
          )}
          <Button variant="primary" onClick={handleCheckout}>Pesan Sekarang</Button>
        </div>
      </div>
    </div>
  )
}