import "./styles/styles.css";
import { deckValidator } from "./modules/logic";
import {okDeck, wrongQunatityDeck, wrongSyntaxDeck} from "../test/texttest";

const textWrong1 = "4 black lotus\n25 dispel\n4 refurbished familiar"
const textWrong2 = "4 black lotus\n2q dispel\n4 refurbished familiar"

const app = await deckValidator(wrongSyntaxDeck);
console.log("textok")
console.log(app.errors);
console.log(app.cardList);


// console.log("textWrong1")
// app.inputParser(textWrong1);
// console.log(app.getData());
// console.log(app.getErrors());

// console.log("textWrong2")
// app.inputParser(textWrong2);
// console.log(app.getData());
// console.log(app.getErrors());

