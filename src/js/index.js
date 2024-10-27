// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createBoard, newGame } from './board';
import { solvePuzzle } from './solvepuzzle'; //solo hay que importar a función principal
import { generateViews } from './views';


const checkButtonElement = document.getElementById('check__button');
const newGameButtonElement = document.getElementById('new_game__button');

//Genero 4 arrays de 4 números cada uno.  

/*
let correctBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const checkAnswer = (correctBoard) =>
{
    const answers = document.querySelectorAll('input');
    for (let i = 0; i < answers.length; i++)
    {
        if (answers[i].value === correctBoard[i])
        {
            console.log(answers[i].value);
            answers[i].classList.add('green');
        }
    }
}

createBoard();
//checkButtonElement.addEventListener('click', checkAnswer(correctBoard));
//checkAnswer();
*/

const size = 4;
const views = generateViews(); //up, left, down, right --- orden para las vistas
console.table(views)
const matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

createBoard();
newGame(views);
solvePuzzle(matrix, 0, 0, views);
