import React from "react";
import ReactDOM from "react-dom/client";
import Booklist from "./Components/Booklist/Booklist";

function Main() { return <Booklist /> }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);