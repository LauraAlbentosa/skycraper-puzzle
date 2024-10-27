export const checkAnswer = () =>
{
    let cont = 0;
    const answers = document.querySelectorAll('input');
    const answersMatrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for (let i = 0; i < answers.length; i++)
    {
        for (let j = 0; j < answers[i].length; j++)
        {
            answersMatrix[cont][j] = answers[i];
            console.log(answersMatrix[cont][j]);
            cont++;
        }
    }
    console.table(answersMatrix);
}