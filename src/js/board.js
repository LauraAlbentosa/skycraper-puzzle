const boardContainer = document.getElementById('container');

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
