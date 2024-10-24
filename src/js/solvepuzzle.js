const size = 4;

export const checkViews = (matrix, views) => 
{
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
    }
    if (visible != views[0][col])
        return (0);
    max = 0;
    return (1);
}

export const solvePuzzle = (matrix, row, col, views) =>
{
    if (row === size - 1 && col === size)
        return (checkViews(matrix, views));
    if (col === 0)
    {
        row++;
        col = 0;
    }
    if (matrix[row][col] != 0)
        return (solvePuzzle(matrix, row, col + 1, views));
    for (let num = 0; num <= size; num++)
    {
        if (validNumber(matrix, row, col, num))
        {
            matrix[row][col] = num;
            if (solvePuzzle(matrix, row, col + 1, views))
                return (1);
            matrix[row][col] = 0;
        }
    }
    return (0);
}