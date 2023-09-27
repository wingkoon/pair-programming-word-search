const wordSearch = (letters, word) => {
  let found = false;
  let backJoin;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let i = 0; i < letters.length; i++) {
    backJoin = horizontalJoin[i].split("").reverse().join("");
    if ((horizontalJoin[i].includes(word)) || (backJoin.includes(word))) {
      return true;
    }
  }
  found = diagonalCheck(letters, word);
  return found;
};

const diagonalCheck = function(letters, word) {
  let diagonalJoin = "";
  const numCol = letters[0].length;
  const numRow = letters.length;
  if ((numCol < 2) || (numRow < 2)) {
    return false;
  } else if (numCol >= numRow) {
    for (let i = 0; i <= numCol - numRow; i++) {
      diagonalJoin = "";
      for (let j = 0; j < numRow; j++) {
        diagonalJoin += letters[i + j][j];
      }
      if (diagonalJoin.includes(word)) {
        return true;
      }
      diagonalJoin = "";
      for (let k = numRow - 1; k < 1; k--) {
        diagonalJoin += letters[i + numRow - 1 - k][numRow - 1 - k];
      }
      if (diagonalJoin.includes(word)) {
        return true;
      }
    }
  } else {
    for (let i = 0; i <= numRow - numCol; i++) {
      diagonalJoin = "";
      for (let j = 0; j < numCol; j++) {
        diagonalJoin += letters[j][i + j];
      }
      if (diagonalJoin.includes(word)) {
        return true;
      }
      diagonalJoin = "";
      for (let k = numCol - 1; k < 1; k--) {
        diagonalJoin += letters[numCol - 1 - k][i + numCol - 1 - k];
      }
      if (diagonalJoin.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;