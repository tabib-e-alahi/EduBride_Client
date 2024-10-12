import React from 'react';

const CartCompo = ({cart,refetch}) => {
    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t bg-[] border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src="https://i.ibb.co.com/gS8PLs2/web-development-773186-1178.jpg"
            alt="Black Leather Purse"
            className="h-48 mx-auto object-center object-cover md:block hidden"
          />
          
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
            Tabib E Alahi
          </p>
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-black leading-none text-gray-800">
            Tabib E Alahi
            </p>
            <p>Qty:5</p>
          </div>
          <p className="text-xs leading-3 text-gray-600 pt-2">
            Size: 4
          </p>
          <p className="text-xs leading-3 text-gray-600 py-4">
          Tabib E Alahi
          </p>
          <p className="w-96 text-xs leading-3 text-gray-600">
            Only 5 item(s) in stock
          </p>
          <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
              <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                Add to favorites
              </p>
              <button  className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                Remove
              </button>
            </div>
            <p className="text-base font-black leading-none text-gray-800">
              $5
            </p>
          </div>
        </div>
      </div> 
    );
};

export default CartCompo;