// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { solvePuzzle } from './solvepuzzle'; //solo hay que importar a función principal
import { generateViews } from './views';

const startButtonElement = document.getElementById('start-button');
const checkButtonElement = document.getElementById('check__button');

//Genero 4 arrays de 4 números cada uno.  
const printSolution = matrix =>
{
    for (let row = 0; row < size; row++)
    {
        for (let col = 0; col < size; col++)
        {
            console.log(matrix[row][col]);
        }
        console.log("\n");
    }
}

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

if(solvePuzzle(matrix, 0, 0, views))
{
    console.log("Yay!!");
    printSolution(matrix);
}
else
{
    console.log("F");
}
