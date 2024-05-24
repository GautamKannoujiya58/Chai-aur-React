console.log("Hello world | Chai Hi");
function customRender(reactElmt, mainContainer) {
  const domElmt = document.createElement(reactElmt.type);
  //   domElmt.setAttribute("href", reactElmt.props.href);
  //   domElmt.setAttribute("target", reactElmt.props.target);
  //   domElmt.innerHTML = reactElmt.Children;
  for (const prop in reactElmt.props) {
    domElmt.setAttribute(prop, reactElmt.props[prop]);
  }
  domElmt.textContent = reactElmt.children;
  mainContainer.appendChild(domElmt);
}

const reactElmt = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElmt, mainContainer);
