// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createBoard, newGame } from './board';
import { solvePuzzle } from './solvepuzzle'; //solo hay que importar a función principal
import { generateViews } from './views';
import { checkAnswer, generateAnswersMatrix } from './checkanswers';
import { newBoard } from './board';


const checkButtonElement = document.getElementById('check__button');
const newGameButtonElement = document.getElementById('new_game__button');



const size = 4;
const views = newGame();
let matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let newMatrix = [];
let answersMatrix = [];

newMatrix = solvePuzzle(matrix, 0, 0, views);
console.table(newMatrix);
//answersMatrix = generateAnswersMatrix();
createBoard();
newGameButtonElement.addEventListener('click', () => newGame());
newGameButtonElement.addEventListener('click', () => newBoard());
checkButtonElement.addEventListener('click', () => checkAnswer(newMatrix));
