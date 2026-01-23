import "./styles/styles.css";
import { deckValidator } from "./modules/deckValidator";
import {okDeck, wrongQunatityDeck, wrongSyntaxDeck, nonExistentCardDeck, illegalDeck, landsDeck} from "../test/texttest";


const app = await deckValidator(nonExistentCardDeck);
console.table(app.errors);
console.table(app.cardsList);