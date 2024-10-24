export const generateViews = () =>
{
    const views1 = [[3,2,2,1],[4,2,1,3],[2,2,1,3],[1,2,2,2]];
    const views2 = [[2,1,2,3],[2,3,1,2],[2,3,2,1],[3,2,3,1]];
    const views3 = [[2,2,4,1],[3,2,1,2],[2,2,1,4],[1,2,3,2]];
    const views4 = [[3,1,3,2],[2,2,1,3],[2,2,1,3],[2,1,3,2]];
    const views5 = [[1,3,2,2],[1,3,2,2],[3,1,2,2],[2,1,2,3]];
    const views6 = [[1,3,2,2],[1,3,2,2],[3,1,2,2],[2,1,2,3]];

    const posibleViews = [views1,views2,views3,views4,views5,views6];
    const index = Math.floor(Math.random() * 6);
    return posibleViews[index];
}
