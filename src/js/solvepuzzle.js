const size = 4;

export const validNumber = (matrix, row, col, num) =>
{
    for (let i = 0; i < size; i++)
    {
        if (matrix[row][i] === num || matrix[i][col] === num)
            return false;
    }
    return true;
}

export const checkViews = (matrix, views) => 
{
    let max, visible;

    for (let col = 0; col < size; col++) 
    {
        max = 0;
        visible = 0;
        for (let row = 0; row < size; row++) 
        {
            if (matrix[row][col] > max)
            {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[0][col]) 
            return false; 
    }

    for (let col = 0; col < size; col++) 
    {
        max = 0;
        visible = 0;
        for (let row = size - 1; row >= 0; row--) 
        {
            if (matrix[row][col] > max) 
            {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[2][col]) 
            return false; 
    }

    for (let row = 0; row < size; row++) 
    {
        max = 0;
        visible = 0;
        for (let col = 0; col < size; col++) 
        {
            if (matrix[row][col] > max) 
            {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[1][row]) 
            return false; 
    }

    for (let row = 0; row < size; row++)
    {
        max = 0;
        visible = 0;
        for (let col = size - 1; col >= 0; col--) 
        {
            if (matrix[row][col] > max) 
            {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[3][row]) 
            return false; 
    }

    return true; 
}

export const solvePuzzle = (matrix, row, col, views) =>
{
    if (row === size - 1 && col === size)
        return (checkViews(matrix, views));
    if (col === size)
    {
        row++;
        col = 0;
    }
    if (matrix[row][col] !== 0)
        return (solvePuzzle(matrix, row, col + 1, views));
    for (let num = 1; num <= size; num++)
    {
        if (validNumber(matrix, row, col, num))
        {
            matrix[row][col] = num;
            if (solvePuzzle(matrix, row, col + 1, views))
                return true;
            matrix[row][col] = 0;
        }
    }
    return false;
}

