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
    return (false);
}

/*
const size = 4;

export const validNumber = (matrix, row, col, num) => {
    for (let i = 0; i < size; i++) {
        if (matrix[row][i] === num || matrix[i][col] === num) {
            return false; // Cambiado de 0 a false para claridad
        }
    }
    return true; // Cambiado de 1 a true para claridad
}

export const checkViews = (matrix, views) => {
    let max = 0;
    let visible = 0;

    // Verifica las vistas de arriba hacia abajo
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[0][col]) return false; // Vista superior
        max = 0;
        visible = 0;
        for (let row = size - 1; row >= 0; row--) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[2][col]) return false; // Vista inferior
    }

    // Verifica las vistas de izquierda a derecha
    for (let row = 0; row < size; row++) {
        max = 0;
        visible = 0;
        for (let col = 0; col < size; col++) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[1][row]) return false; // Vista izquierda
        max = 0;
        visible = 0;
        for (let col = size - 1; col >= 0; col--) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
                visible++;
            }
        }
        if (visible !== views[3][row]) return false; // Vista derecha
    }
    return true; // Todas las vistas son válidas
}

export const solvePuzzle = (matrix, row, col, views) => {
    // Cuando se llena la última celda
    if (row === size - 1 && col === size) {
        return checkViews(matrix, views);
    }
    // Cuando se completa una fila, avanzar a la siguiente
    if (col === size) {
        row++;
        col = 0;
    }
    // Si la celda ya está llena, avanzar a la siguiente
    if (matrix[row][col] !== 0) {
        return solvePuzzle(matrix, row, col + 1, views);
    }
    // Probar cada número de 1 a 4
    for (let num = 1; num <= size; num++) { // Cambiado de 0 a 1
        if (validNumber(matrix, row, col, num)) {
            matrix[row][col] = num; // Asignar el número
            if (solvePuzzle(matrix, row, col + 1, views)) { // Llamada recursiva
                return true; // Solución encontrada
            }
            matrix[row][col] = 0; // Deshacer el movimiento (backtrack)
        }
    }
    return false; // No se encontró solución
}
*/