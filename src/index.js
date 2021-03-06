import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import registerServiceWorker from "./registerServiceWorker";

// Get the element to prepend our app to. This could be any element on a specific website or even just `document.body`.
const main = document.getElementById("main");

// Create a div to render the <App /> component to.
const app = document.createElement("div");

// Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
app.id = "root";

// Prepend the <App /> component to the main element if it exists. You could also use `appendChild` depending on your needs.
if (main) main.prepend(app);

// Render the <App /> component.
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
