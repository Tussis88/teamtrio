import "./styles/styles.css";
import { deckValidator } from "./modules/logic";
import {okDeck, wrongQunatityDeck, wrongSyntaxDeck, nonExistentCardDeck, illegalDeck, landsDeck} from "../test/texttest";


const app = await deckValidator(okDeck);
console.log(app.errors);
console.log(app.cardsList);