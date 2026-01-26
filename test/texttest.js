const okDeck = "2 Delver of Secrets\n2 insectile aberration\n4 Tolarian Terror\n4 Cryptic Serpent\n4 Brainstorm\n2 Thought Scour\n2 dispel\n4 Mental Note\n3 Snow-covered forest\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Hydroblast\n2 Blue Elemental Blast\n3 Steel Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const wrongSyntaxDeck = "4 Delver of Secrets\nTolarian Terror\n4 Cryptic Serpent\n4 Brainstorm\n4\n4 Mental Note\n3 Disrupt\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Hydroblast\n2 Blue Elemental Blast\n3 Steel Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const wrongQunatityDeck = "4 Delver of Secrets\n2 Tolarian Terror\n4 Cryptic Serpent\n4 Brainstorm\n4 Thought Scour\n4 Mental Note\n3 Disrupt\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Hydroblast\n2 Blue Elemental Blast\n3 Steel Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const nonExistentCardDeck = "4 Delver ofd Secrets\n4 Tolarian Terror\n4 Cryptic Serpent\n4 Brainfart\n4 Thought Scour\n4 Mental Note\n3 Disrupt\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Hydroblast\n2 Blue Elemental Blast\n3 Woo Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const illegalDeck = "4 Delver of Secrets\n4 Tolarian Terror\n4 Cryptic Serpent\n4 Black Lotus\n4 Thought Scour\n4 Mental Note\n3 Disrupt\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Ancestral recall\n2 Blue Elemental Blast\n3 Steel Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const landsDeck = "4 forest\n4 snow-covered swamp\n4 Cryptic Serpent\n4 Brainstorm\n4 Thought Scour\n4 Mental Note\n3 Disrupt\n2 Spell Pierce\n3 Counterspell\n3 Boomerang\n2 Sleep of the Dead\n3 Ponder\n4 Lorien Revealed\n16 Island\n4 Hydroblast\n2 Blue Elemental Blast\n3 Steel Sabotage\n2 Annul\n2 Dispel\n2 Gut Shot";

const deck1 = "4 Delver of Secrets\n" +
    "4 Tolarian Terror\n" +
    "4 Cryptic Serpent\n" +
    "4 Brainstorm\n" +
    "4 Thought Scour\n" +
    "4 Mental Note\n" +
    "2 Disrupt\n" +
    "2 Spell Pierce\n" +
    "4 Counterspell\n" +
    "3 Boomerang\n" +
    "2 Sleep of the Dead\n" +
    "3 Ponder\n" +
    "4 Lorien Revealed\n" +
    "16 Island\n" +
    "Sideboard\n" +
    "4 Hydroblast\n" +
    "2 Blue Elemental Blast\n" +
    "3 Steel Sabotage\n" +
    "2 Annul\n" +
    "2 Dispel\n" +
    "2 Gut Shot"

const deck2 = "4 Quirion Ranger\n" +
    "4 Fyndhorn Elves\n" +
    "4 Llanowar Elves\n" +
    "2 Elvish Mystic\n" +
    "4 Priest of Titania\n" +
    "4 Masked Vandal\n" +
    "4 Timberwatch Elf\n" +
    "4 Avenging Hunter\n" +
    "2 Sagu Wildling\n" +
    "4 Generous Ent\n" +
    "4 Nyxborn Hydra\n" +
    "4 Winding Way\n" +
    "4 Lead the Stampede\n" +
    "12 Forest\n" +
    "Sideboard\n" +
    "4 Faerie Macabre\n" +
    "4 Vitu-Ghazi Inspector\n" +
    "4 Spinewoods Paladin\n" +
    "2 Pulse of Murasa\n" +
    "1 Gleeful Sabotage"

const deck3 = "4 Voldaren Epicure\n" +
    "4 Sneaky Snacker\n" +
    "4 Kessig Flamebreather\n" +
    "3 Guttersnipe\n" +
    "4 Lightning Bolt\n" +
    "4 Lava Dart\n" +
    "4 Fiery Temper\n" +
    "3 Fireblast\n" +
    "4 Faithless Looting\n" +
    "4 Grab the Prize\n" +
    "4 Highway Robbery\n" +
    "18 Mountain\n" +
    "Sideboard\n" +
    "4 Red Elemental Blast\n" +
    "4 Pyroblast\n" +
    "3 Relic of Progenitus\n" +
    "3 Searing Blaze\n" +
    "1 Flaring Pain"

export { okDeck, wrongSyntaxDeck, wrongQunatityDeck, nonExistentCardDeck, illegalDeck, landsDeck, deck1, deck2, deck3 }