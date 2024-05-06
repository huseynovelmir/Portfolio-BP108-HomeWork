import React from "react";

const Checkbox = ({ products, setProducts }) => {
  return (
    // <form class="max-w-sm mx-auto p-4">
    //   <select
    //     id="countries"
    //     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //   >
    //     <option selected>Choose a sort method (Default)</option>
    //     <option
    //       value="name-az"
    //       onSelect={() => {
    //         let newarr = [...products].sort((a, b) =>
    //           a.title[0].localeCompare(b.title[0])
    //         );
    //         setProducts(newarr);
    //       }}
    //     >
    //       Name: a-z
    //     </option>
    //     <option value="name-za">Name: z-a</option>
    //     <option value="pricemaxmin">Price: max-min</option>
    //     <option value="priceminmax">Price: min-max</option>
    //     <option value="ratingmaxmin">Rating: max-min</option>
    //     <option value="ratingminmax">Rating: min-max</option>
    //     <option value="countmaxmin">Count: max-min</option>
    //     <option value="countminmax">Count: min-max</option>
    //   </select>
    // </form>
    <div className="w-100 flex align-items-center justify-center gap-10 p-5">
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort((a, b) =>
            a.title[0].localeCompare(b.title[0])
          );
          setProducts(newarr);
        }}
      >
        Name: a-z
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort((a, b) =>
            b.title[0].localeCompare(a.title[0])
          );
          setProducts(newarr);
        }}
      >
        Name: z-a
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort((a, b) => b.price - a.price);
          setProducts(newarr);
        }}
      >
        Price: max-min
      </button>

      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort((a, b) => a.price - b.price);
          setProducts(newarr);
        }}
      >
        Price: min-max
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setProducts(newarr);
        }}
      >
        Rate: max-min
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setProducts(newarr);
        }}
      >
        Rate: min-max
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort(
            (a, b) => b.rating.count - a.rating.count
          );
          setProducts(newarr);
        }}
      >
        Count: max-min
      </button>
      <button
        className=" bg-white p-2 rounded-md bg-cyan-400"
        onClick={() => {
          let newarr = [...products].sort(
            (a, b) => a.rating.count - b.rating.count
          );
          setProducts(newarr);
        }}
      >
        Count: min-max
      </button>
    </div>
  );
};

export default Checkbox;
