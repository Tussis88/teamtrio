import "./styles/styles.css";
import { deckValidator } from "./modules/deckValidator";
import { teamValidator } from "./modules/teamValidator";
import {okDeck, wrongQunatityDeck, wrongSyntaxDeck, nonExistentCardDeck, illegalDeck, landsDeck, deck1, deck2, deck3} from "../test/texttest";

/*
const app = await deckValidator(nonExistentCardDeck);
console.table(app.errors);
console.table(app.cardsList);
*/

const app = await teamValidator(deck1, deck2, deck3);