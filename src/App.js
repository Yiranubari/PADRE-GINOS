import React from "react";
import { createRoot } from "react-dom/client";

const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Welcome to Padre Gino's!"),
    React.createElement("p", {}, "The best Italian food in town."),
    React.createElement(pizza, {
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
    }),
    React.createElement(pizza, {
      name: "Pepperoni",
      description:
        "A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese",
    }),
    React.createElement(pizza, {
      name: "Veggie Supreme",
      description:
        "A colorful mix of fresh veggies on a bed of mozzarella cheese",
    }),
    React.createElement(pizza, {
      name: "BBQ Chicken",
      description:
        "Grilled chicken pieces smothered in tangy BBQ sauce, topped with onions and cheese",
    }),

    React.createElement(pizza, {
      name: "Hawaiian",
      description: "A tropical treat with ham and pineapple on a cheesy base",
    }),
    React.createElement(pizza, {
      name: "Four Cheese",
      description: "A rich blend of four cheeses on a crispy crust",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
