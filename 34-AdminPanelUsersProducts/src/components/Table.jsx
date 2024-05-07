import React, { useEffect, useState } from "react";
import axios from "axios";
import Checkbox from "./Checkbox";
import SearchBar from "./SearchBar";
const Table = () => {
  const [products, setProducts] = useState([]);
  const data = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res?.data);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <SearchBar products={products} setProducts={setProducts} />
      <Checkbox products={products} setProducts={setProducts} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Count
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={el.id}
            >
              <td className="px-6 py-4">{el.id}</td>
              <td className="px-6 py-4">{el.title}</td>
              <td className="px-6 py-4">{el.category}</td>
              <td className="px-6 py-4">
                <img src={el.image} alt="" className="w-20 h-20" />
              </td>
              <td className="px-6 py-4">{el?.rating?.rate}</td>
              <td
                className={
                  el.rating.count < 100
                    ? "px-6 py-4 text-red-400"
                    : "px-6 py-4 text-yellow-400"
                }
              >
                {el?.rating?.count}
              </td>
              <td className="px-6 py-4">{el.price}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
