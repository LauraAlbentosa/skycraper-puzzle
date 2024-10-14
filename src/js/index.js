// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const startButtonElement = document.getElementById('start-button');
const checkButtonElement = document.getElementById('check__button');
const boardContainer = document.getElementById('container');

//Genero 4 arrays de 4 números cada uno.  
const createBoard = () =>
{
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 4; i++)
    {
        const newRow = document.createElement('div');
        newRow.classList.add('board__row');
        for (let j = 0; j < 4; j++)
        {
            const newColum = document.createElement('input');
            newColum.type = 'number';
            newColum.min = '1';
            newColum.max = '4';
            newColum.classList.add('board__colum');
            newRow.append(newColum);
        }
        fragment.append(newRow);
    }
    boardContainer.append(fragment);
}

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
checkButtonElement.addEventListener('click', checkAnswer(correctBoard));
//checkAnswer();

