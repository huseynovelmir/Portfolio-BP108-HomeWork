import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

function App() {
  const [islogin, SetIslogin] = useState(true);
  const [products, setProducts] = useState(true);
  const [user, setUser] = useState("");
  return (
    <>
      {products ? (
        <>
          {islogin ? (
            <Login
              SetIslogin={SetIslogin}
              setUser={setUser}
              setProducts={setProducts}
            />
          ) : (
            <Register SetIslogin={SetIslogin} />
          )}
        </>
      ) : (
        <Products setProducts={setProducts} user={user} />
      )}
    </>
  );
}

export default App;
