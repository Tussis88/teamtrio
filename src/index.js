import "./styles/styles.css";
import { deckValidator } from "./modules/logic";

const textOk = "4 black lotus\n2 dispel\n4 refurbished familiar"
const textWrong1 = "4 black lotus\n25 dispel\n4 refurbished familiar"
const textWrong2 = "4 black lotus\n2q dispel\n4 refurbished familiar"

const app = deckValidator(textOk);
console.log("textok")
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

