/** 
 Function to pause execution for a specified time
  @param {number} ms - The time to pause execution in milliseconds.
  @returns {Promise} A promise that resolves after the specified time.
*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 
  Function to generate a star border box with specified dimensions and star position
  @param {number} rows - The number of rows in the box.
  @param {number} columns - The number of columns in the box.
  @param {number} starRow - The row position of the star.
  @param {number} starColumn - The column position of the star.
  @returns {string} The generated star border box as a string.
*/
function printStarBorderBox(rows, columns, starRow, starColumn) {
  let starBorderBox = "";
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < columns; j++) {
      if (i === 0 || i === rows - 1) {
        row += "-";
      } else if (j === 0 || j === columns - 1) {
        row += "|";
      } else if (i === starRow && j === starColumn) {
        row += "*";
      } else {
        row += " ";
      }
    }
    starBorderBox += row + "\n";
  }
  return starBorderBox;
}

/** 
  Function to generate a random coordinate within specified limits
  @param {number} maxRow - The maximum row value.
  @param {number} maxColumn - The maximum column value.
  @returns {object} An object containing the randomly generated row and column.
*/
function getRandomCoordinate(maxRow, maxColumn) {
  const row = Math.floor(Math.random() * (maxRow - 2)) + 1; // Avoid the first and last rows
  const column = Math.floor(Math.random() * (maxColumn - 2)) + 1; // Avoid the first and last columns
  return { row, column };
}

/** 
  Function to print a single star border box
  @param {number} height - The height of the box.
  @param {number} width - The width of the box.
*/
function printSingleStarBorderBox(height, width) {
  let starRow = Math.floor(height / 2);
  let starColumn = Math.floor(width / 2);

  const boxContent = printStarBorderBox(height, width, starRow, starColumn);

  // Output the box content to the console
  console.clear();
  console.log(boxContent);
}

// Dimensions of the star border box
const height = 30;
const width = 50;

// Start printing the single star border box
printSingleStarBorderBox(height, width);
