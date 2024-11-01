import React from 'react'; 
import Tag from './ProductPage_Components/DD-tag';
import Price from './ProductPage_Components/DD-price';
import Add from './/ProductPage_Components/New-product';
import Products from './ProductPage_Components/Products';


const MainTemplate = () => {
  return (
    <div className="flex md:text-base text-sm">
      <div className="flex-1 bg-slate-50 md:p-2">
        <div className="p-4">
          <h1 className="transition-all delay-500 text-gray-900 font-semibold pb-4">
            All Products
          </h1>
        <div className="flex justify-between gap-10">
          <div className="w-50">
            <div className="flex space-x-5 items-center">
            <Tag />
              <Price />
              <Add />
              </div>
            </div>
          </div>
          <div>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
