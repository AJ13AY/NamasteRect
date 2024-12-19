const heading=React.createElement("h1",{id:"title"},"Namaste React!");
const heading2=React.createElement("h2",{id:"heading2"},"Namaste ");
const container=React.createElement("div",{id:"conatiner"},[heading,heading2]);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);