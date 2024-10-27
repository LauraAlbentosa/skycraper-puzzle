import { generateViews } from "./views";

const boardContainer = document.getElementById('board');
const viewsUpElement = document.getElementById('views_up');
const viewsDownElement = document.getElementById('views_down');
const viewsLeftElement = document.getElementById('views_left');
const viewsRightElement = document.getElementById('views_right');
const startButtonElement = document.getElementById('start-button');

export const createBoard = () =>
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

export const newGame = (views) =>
{
    const fragment1 = document.createDocumentFragment();
    for (let i = 0; i < views[0].length; i++)
    {
        const newDiv = document.createElement('div');
        const newText = document.createElement('p');
        newDiv.classList.add('views_hor__text');
        newDiv.append(newText);
        newText.textContent = views[0][i];
        fragment1.append(newDiv);
    }
    
    viewsUpElement.append(fragment1);

    const fragment2 = document.createDocumentFragment();
    for (let i = 0; i < views[2].length; i++)
    {
        const newDiv = document.createElement('div');
        const newText = document.createElement('p');  
        newDiv.classList.add('views_hor__text');
        newDiv.append(newText);
        newText.textContent = views[2][i];
        fragment2.append(newDiv);
    }
    viewsDownElement.append(fragment2);

    const fragment3 = document.createDocumentFragment();
    for (let i = 0; i < views[1].length; i++)
    {
        const newDiv = document.createElement('div');
        const newText = document.createElement('p');  
        newDiv.classList.add('views_hor__text');
        newDiv.append(newText);
        newText.textContent = views[1][i];
        fragment3.append(newDiv);
    }
    viewsLeftElement.append(fragment3);
    return views;
}
