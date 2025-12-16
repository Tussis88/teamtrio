import "./styles/styles.css";

//test
import { check } from "./modules/123check";
import test_image from "./assets/images/test_image.jpg";

console.log(check);
document.body.textContent = check;

const imageTest = document.createElement("img");
imageTest.src = test_image;

document.body.appendChild(imageTest);
