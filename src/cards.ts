
interface Player {
    name: string;
    cards: Card[];
}

enum Suit {
    Cat = 'Cat',
    Dog = 'Dog',
    Bird = 'Bird',
    Fish = 'Fish'
}

interface Card {
    id: string;
    suit: Suit;
    value: number;
}

const maxCardValue = 10;
const minCardValue = 1;




function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}


function initializeDeck(): Card[] {
    const deck: Card[] = [];
    for (let i = minCardValue; i <= maxCardValue; i++) {
        deck.push({
            id: generateId(),
            suit: Suit.Cat,
            value: i
        });
        deck.push({
            id: generateId(),
            suit: Suit.Dog,
            value: i
        });
        deck.push({
            id: generateId(),
            suit: Suit.Bird,
            value: i
        });
        deck.push({
            id: generateId(),
            suit: Suit.Fish,
            value: i
        });
    }
    return deck;
}



function shuffleDeck(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
}


function dealCards(
    players: Player[],
    deck: Card[],
    cardsPerPlayer: number,
): { players: Player[]; remainingDeck: Card[] } {
    for (let i = 0; i < cardsPerPlayer; i++) {
        players.forEach(player => {
            const card = deck.pop();
            if (!!card) {
                player.cards.push(card)
            }
        })
    }
    return {
        remainingDeck: deck,
        players
    }
}

// ===============================================================

let initialPlayers: Player[] = [
    {
        name: 'dave',
        cards: [],
    },
    {
        name: 'chris',
        cards: [],
    },
    {
        name: 'tom',
        cards: [],
    },
]

const deck: Card[] = initializeDeck();
const shuffledDeck: Card[] = shuffleDeck(deck);
const cardsPerPlayer = 5;


const { players, remainingDeck } = dealCards(initialPlayers, deck, cardsPerPlayer);
console.log('players', players)
console.log('remainingDeck', remainingDeck)


// rules
// each player is dealt 5 cards
// players play cards in a cirle, adding to the card
// if the current card in play is
// card is the same suit, any value can be played
// if the card is the same value, that value can be played regardless of suit






let playedCards: Card[] = [deck.pop() as Card];
let playerWon = false;
while (!playerWon || (remainingDeck.length === 0)) {



    players.forEach((player) => {
        const topCard = playedCards.pop() as Card;
        const currentCard = player.cards.pop() as Card;
        console.log('topCard', topCard)
        const sameSuit = currentCard.suit === topCard.suit;
        const sameValue = currentCard.value === topCard.value;
        

        if(!!sameSuit){
            // player.cards = player.cards.filter(c => c.id !== sameSuit.id);
        }
        // else if(!!sameValue){
        //     playedCards.push(sameValue);
        //     player.cards = player.cards.filter(c => c.id !== sameValue.id);
        // }
        // if(player.cards.length === 0){
        //     playerWon = true;
        // }
    });
}






