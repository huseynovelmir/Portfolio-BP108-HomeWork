import React from "react";

const Checkbox = ({ products, setProducts }) => {
  return (
    <div className="w-100 flex align-items-center justify-center gap-10 p-5">
      <button
        className="p-2 rounded-md bg-blue-500"
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
        className="p-2 rounded-md bg-blue-500"
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
        className="p-2 rounded-md bg-blue-500"
        onClick={() => {
          let newarr = [...products].sort((a, b) => b.price - a.price);
          setProducts(newarr);
        }}
      >
        Price: max-min
      </button>

      <button
        className="p-2 rounded-md bg-blue-500"
        onClick={() => {
          let newarr = [...products].sort((a, b) => a.price - b.price);
          setProducts(newarr);
        }}
      >
        Price: min-max
      </button>
      <button
        className="p-2 rounded-md bg-blue-500"
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
        className="p-2 rounded-md bg-blue-500"
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
        className="p-2 rounded-md bg-blue-500"
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
        className="p-2 rounded-md bg-blue-500"
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
