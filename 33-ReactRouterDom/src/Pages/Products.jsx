import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const response = await axios("https://api.escuelajs.co/api/v1/products");
    setProducts(response?.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/detailpage/${product.id}`);
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product?.images[0]}
                  alt={product?.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  let arr = product.filter((el) => el.id != product.id);
                  setProducts(arr);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
