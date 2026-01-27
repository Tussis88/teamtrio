import "./styles/styles.css";
import { teamValidator } from "./modules/teamValidator";
import { pageRenderer } from "./modules/domTrio";
import {okDeck, wrongQunatityDeck, wrongSyntaxDeck, nonExistentCardDeck, illegalDeck, landsDeck, deck1, deck2, deck3} from "../test/texttest";

/*
const app = await deckValidator(nonExistentCardDeck);
console.table(app.errors);
console.table(app.cardsList);
*/

const app = await teamValidator(deck1, deck2, deck3);
pageRenderer();