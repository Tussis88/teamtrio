import "./styles/styles.css";
import { appLogic } from "./modules/logic";

const app = appLogic();

const textOk = "4 black lotus\n2 dispel\n4 refurbished familiar"
const textWrong1 = "4 black lotus\n25 dispel\n4 refurbished familiar"
const textWrong2 = "4 black lotus\n2q dispel\n4 refurbished familiar"

console.log("textok")
app.inputParser(textOk);
console.log(app.getData());
console.log(app.getErrors());


// console.log("textWrong1")
// app.inputParser(textWrong1);
// console.log(app.getData());
// console.log(app.getErrors());

// console.log("textWrong2")
// app.inputParser(textWrong2);
// console.log(app.getData());
// console.log(app.getErrors());

