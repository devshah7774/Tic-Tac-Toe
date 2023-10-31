// export const findWinner = (board: string[]): [string, number, number, number] => {
export const findWinner = (board: string[]): string => {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winningPositionIndex = 0;
  let getWinner = "";
  // const ansArr:[string, number, number, number] = ["", 0, 0, 0];

  while (winningPositionIndex < winningPositions.length && getWinner === "") {
    // Get the combination to check
    const combinationToCheck = winningPositions[winningPositionIndex];

    // Get the value to check. Also, you can't check empty string cuz it might get failed.
    // You have to check with either X or O
    const valuesToCheck = combinationToCheck.map((el) => board[el]);

    // Check for every value
    const isFinished = valuesToCheck.every(
      (el) => el === valuesToCheck[0] && valuesToCheck[0]
    );

    getWinner = isFinished ? valuesToCheck[0] : "";

    // if(isFinished){
    //   ansArr.push(getWinner);
    //   ansArr.push(combinationToCheck[0]);
    //   ansArr.push(combinationToCheck[1]);
    //   ansArr.push(combinationToCheck[2]);
    // }

    winningPositionIndex++;
  }
  // return ansArr;
  return getWinner;
}; 