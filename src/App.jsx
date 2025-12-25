import { createRoot } from "react-dom";
import Order from "../Order";
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
      {/* <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham, pineapple, n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="french fries, hot dogs, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
