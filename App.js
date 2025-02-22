const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello, world!"),
    React.createElement("p", null, "This is a paragraph."),
    React.createElement(
      "a",
      { href: "https://www.example.com" },
      "This is a link."
    ),
  ])
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
