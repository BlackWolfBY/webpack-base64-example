import "./index.css";

const $input = document.createElement("input", { type: "text" });
const $header = document.createElement("h1");

$header.innerText = "Hello world!";

document.querySelector("#app").appendChild($header);
document.querySelector("#app").appendChild($input);
