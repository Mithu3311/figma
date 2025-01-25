"use client";

import { poppins } from "@/app/ui/fonts";
import React, { useEffect, useState } from "react";
import { Circle, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const CheckOutProducts = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Please select a product.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Example order data
    const orderData = {
      cartItems,
      total: calculateSubtotal(),
      paymentMethod,
      orderDate: new Date().toISOString(),
    };

    // Save the order data (You can integrate an API here to save this on the server)
    console.log("Order placed:", orderData);

    alert(`Your order has been placed using ${paymentMethod}.`);
    // Optionally, clear the cart after placing the order
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  if (!isClient) return null;

  return (
    <>
      <div className="mb-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`${poppins.className} flex flex-col lg:flex-row justify-between items-start w-full gap-8`}
        >
          {/* Billing Details */}
          <div className="w-full lg:w-1/2">
            <div>Billing Details Component Here</div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 mb-24">
              <div className="flex flex-col justify-start items-start gap-6 w-full">
                <h1 className="text-[24px] font-medium">Product</h1>
                {cartItems.map((item) => (
                  <div
                    key={item.product._id}
                    className="flex justify-start items-center gap-5 text-[16px]"
                  >
                    <h5>{item.product.name}</h5>
                    <h5>X</h5>
                    <h5>{item.quantity}</h5>
                  </div>
                ))}
                <h1 className="text-[16px]">Subtotal</h1>
                <h1 className="text-[16px]">Total</h1>
              </div>
              <div className="flex flex-col justify-start items-start gap-6 w-full">
                <h1 className="text-[24px] font-medium">Subtotal</h1>
                <h1 className="text-[16px]">
                  Rs. {calculateSubtotal().toLocaleString()}
                </h1>
                <h1 className="text-[16px] text-[#B88E2F] font-semibold">
                  Rs. {calculateSubtotal().toLocaleString()}
                </h1>
              </div>
            </div>

            {/* Payment Options */}
            <div className="flex flex-col justify-start items-start w-full">
              <div className="w-full flex flex-col justify-start items-start gap-3 mb-9">
                <div
                  className="flex justify-start items-center gap-3 cursor-pointer"
                  onClick={() => setPaymentMethod("Direct Bank Transfer")}
                >
                  <CircleDot
                    className={`w-[14px] h-[14px] ${
                      paymentMethod === "Direct Bank Transfer" ? "fill-black" : "fill-none"
                    }`}
                  />
                  <h1 className="text-black text-[16px]">
                    Direct Bank Transfer
                  </h1>
                </div>
                <p className="text-[16px] text-gray-700">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not
                  be shipped until the funds have cleared in our account.
                </p>
                <div
                  className="flex flex-row gap-3 justify-start items-center cursor-pointer"
                  onClick={() => setPaymentMethod("Cash On Delivery")}
                >
                  <Circle
                    className={`w-[14px] h-[14px] ${
                      paymentMethod === "Cash On Delivery" ? "fill-black" : "fill-none"
                    }`}
                  />
                  <h1 className="text-[16px] text-gray-700">
                    Cash On Delivery
                  </h1>
                </div>
                <h5>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account,
                  and for other purposes described in our{" "}
                  <b>privacy policy</b>.
                </h5>
              </div>

              {/* Place Order Button */}
              <Button
                variant={"outline"}
                className="flex items-center justify-center w-full lg:w-[318px] h-[64px] rounded-xl hover:text-gray-600"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutProducts;
