import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      {/* <x-my-webcomponent></x-my-webcomponent> */}
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiian" description="pep, cheese, n stuff" />
      <Pizza name="Americano" description="pep, cheese, n stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
