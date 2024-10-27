
const finishPopUpElement = document.getElementById('finish');
const checkButtonElement = document.getElementById('check__button');

export const generateAnswersMatrix = () =>
{
    let cont = 0;
    const answers = document.querySelectorAll('input');
    let answersMatrix = [];
    
    while (cont != answers.length)
    {
        let array = [0,0,0,0];
        for (let i = 0; i < 4; i++)
        {
            array[i] = answers[cont].value;
            cont++;
        }
        answersMatrix.push(array);
    }
    //console.table(answersMatrix);
    return(answersMatrix);
}

export const checkAnswer = (matrix) =>
{
    const answersMatrix = generateAnswersMatrix();
    const inputs = document.querySelectorAll('input');
    let index = 0;
    let cont = 0;
    console.table(answersMatrix);
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            inputs[index].classList.remove('green');
            inputs[index].classList.remove('red');
            if (matrix[i][j] == answersMatrix[i][j])
            {
                inputs[index].classList.add('green');
                index++;
                cont++;
                if (cont === 15)
                {
                    //finishPopUpElement.textContent = "Congratulations you win";
                    finishPopUpElement.classList.add('d-flex');
                    checkButtonElement.disabled = true;
                }
            }
            else
            {
                inputs[index].classList.add('red');
                index++;
            }
        }
    }
}