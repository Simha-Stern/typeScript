
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum move{
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors'
}

interface player {
    name:string,
    move:move |null
}

type Result = 'tie' | 'player1' | 'player2';


function playGame(player1:player, player2:player):Result {
    if (!player1.move || !player2.move) {
       throw new Error ("Both players must make a move.");
    }
    if (player1.move === player2.move) {
        return 'tie'
    }
    if (
        (player1.move === move.Rock && player2.move === move.Scissors) ||
        (player1.move === move.Paper && player2.move === move.Rock) ||
        (player1.move === move.Scissors && player2.move === move.Paper)
    ) {
        return 'player1';
    }
    return 'player2';
}

const player1: player = { name: 'player 1', move: move.Scissors };
const player2: player = { name: 'player 2', move: move.Scissors };

const winner: Result = playGame(player1, player2);
console.log(`Winner: ${winner}`);

