const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Welcome to Padre Gino's!"),
    React.createElement("p", {}, "The best Italian food in town.")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
