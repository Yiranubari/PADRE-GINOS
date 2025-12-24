const pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "The Best Pizza in Town"),
    React.createElement(
      "p",
      {},
      "Come and try our delicious pizzas made with fresh ingredients."
    ),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Welcome to Padre Gino's!"),
    React.createElement("p", {}, "The best Italian food in town."),
    React.createElement(pizza),
    React.createElement(pizza),
    React.createElement(pizza),
    React.createElement(pizza),
    React.createElement(pizza),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
