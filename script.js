// //get the squares inside the board
// let squares = document.getElementById("boardContainer");
// //store the gameboard array inside of a gameboard object
// const gameBoard = {
//   boardArr: [],
// };

// //Factory Function for players
// const players = (name, mark) => {
//   //function to add player's own mark to the gameBoard.boardArr array
//   const play = () => {
//     let gameBoardArr = gameBoard.boardArr;
//     gameBoardArr.push(mark);
//   };
//   return { name, mark, play };
// };
// //create players X and 0 respectively
// const playerOne = players("playerOne", "X");
// const playerTwo = players("playerTwo", "O");
// //variable to check the condition of turning rounds
// let turn = true;
// //Module to control the flow of the game
// const gameFlow = (() => {
//   //function that let the players take turns
//   const turnerFunc = () => {
//     if (turn) {
//       playerOne.play();
//     } else {
//       playerTwo.play();
//     }
//     turn = !turn;
//   };
//   //return the function to use it in display controller
//   return { turnerFunc };
// })();
// //module that returns the factory function that takes the user input manually and marks the board
// const markBoard = (() => {
//   const manualMark = () => {
//     let i = 0;
//     squares.addEventListener("click", function (e) {
//       //make sure you're targeting the squares and not the whitespace in between them
//       if (e.target.className === "marker") {
//         //logic that keeps players from playing in spots that are already taken
//         if (e.target.textContent == "X" || e.target.textContent == "O") {
//           return;
//         } else {
//           //invoke the function that lets the players take turns
//           //this is here bcs if not, whenever I push an occupied place, the array gets pushed nevertheless
//           gameFlow.turnerFunc();
//           //array elements are written in squares
//           e.target.textContent = gameBoard.boardArr[i];

//           //the array index gets incremented
//           i++;
//           /*
//                         check if the event is cancelable with the preventdefault
//                         var x = e.cancelable;
//                         console.log(x); YES IT IS 
//                         */
//         }
//       }
//     });
//   };
//   //The logic that lets the player play with the AI
//   const computerMark = () => {
//     let i = 0;
//     squares.addEventListener("click", function (e) {
//       //make sure you're targeting the squares and not the whitespace in between them
//       if (e.target.className === "marker") {
//         //logic that keeps players from playing in spots that are already taken
//         if (e.target.textContent == "X" || e.target.textContent == "O") {
//           return;
//         } else {
//           //here, instead of turnerFunc, we call the playerOne only. The rest is done by the AI, we don't need to call the playerTwo anymore
//           playerOne.play();
//           //array elements are written in squares
//           e.target.textContent = "X";

//           if (e.target.textContent == "X") {
//             //take the id of that square, turn into an array and get the 7th element
//             //which is the 6th in index, bcs js arrays start from 0, remember?
//             //then send that element into the squares placed array that's used for calculations for the AI
//             squaresPlaced.push(e.target.id.split("")[6]);
//             //if I don't put this one, the game crashes upon reaching a tie
//             if (gameBoard.boardArr.length < 9) {
//               computerMove.AIplay();
//             }
//           }

//           //the array index gets incremented
//           i++;
//         }
//       }
//     });
//   };

//   return { manualMark, computerMark };
// })();

// const para1 = document.getElementById("para");
// const playing = document.getElementById("playing");

// //display controller module
// const displayController = (() => {
//   //call the module that returns the factory function that takes the user input manually and marks the board upon click
//   document
//     .getElementById("PlayerVsPlayer")
//     .addEventListener("click", function (e) {
//       markBoard.manualMark();
//       e.target.textContent = "Player X vs Player O";
//       para1.style.display = "none";
//       playing.style.display = "inline";
//       playing.style.marginLeft = "30%";
//       playing.style.justifySelf = "center";
//     });
//   document.getElementById("reset").addEventListener("click", function () {
//     window.location.reload();
//   });

//   //call the function that lets the player play against the AI
//   document
//     .getElementById("PlayerVsComputerAi")
//     .addEventListener("click", function (e) {
//       markBoard.computerMark();
//       e.target.textContent = "Player X vs Player O";
//       para1.style.display = "none";
//       playing.style.display = "inline";
//       playing.style.marginLeft = "30%";
//       playing.style.justifySelf = "center";
//     });
// })();

// const announceResult = document.getElementById("para");
// const gameResult = (() => {
//   //Check all the possible winning combinations, and do something with it
//   const checkResult = () => {
//     if (
//       document.getElementById("marker0").textContent == "X" &&
//       document.getElementById("marker1").textContent == "X" &&
//       document.getElementById("marker2").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker3").textContent == "X" &&
//       document.getElementById("marker4").textContent == "X" &&
//       document.getElementById("marker5").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker6").textContent == "X" &&
//       document.getElementById("marker7").textContent == "X" &&
//       document.getElementById("marker8").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker0").textContent == "X" &&
//       document.getElementById("marker3").textContent == "X" &&
//       document.getElementById("marker6").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker1").textContent == "X" &&
//       document.getElementById("marker4").textContent == "X" &&
//       document.getElementById("marker7").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker2").textContent == "X" &&
//       document.getElementById("marker5").textContent == "X" &&
//       document.getElementById("marker8").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker0").textContent == "X" &&
//       document.getElementById("marker4").textContent == "X" &&
//       document.getElementById("marker8").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker2").textContent == "X" &&
//       document.getElementById("marker4").textContent == "X" &&
//       document.getElementById("marker6").textContent == "X"
//     ) {
//       announceResult.textContent = "Player X Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } //Player O's turn
//     else if (
//       document.getElementById("marker0").textContent == "O" &&
//       document.getElementById("marker1").textContent == "O" &&
//       document.getElementById("marker2").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker3").textContent == "O" &&
//       document.getElementById("marker4").textContent == "O" &&
//       document.getElementById("marker5").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker6").textContent == "O" &&
//       document.getElementById("marker7").textContent == "O" &&
//       document.getElementById("marker8").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker0").textContent == "O" &&
//       document.getElementById("marker3").textContent == "O" &&
//       document.getElementById("marker6").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker1").textContent == "O" &&
//       document.getElementById("marker4").textContent == "O" &&
//       document.getElementById("marker7").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker2").textContent == "O" &&
//       document.getElementById("marker5").textContent == "O" &&
//       document.getElementById("marker8").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker0").textContent == "O" &&
//       document.getElementById("marker4").textContent == "O" &&
//       document.getElementById("marker8").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     } else if (
//       document.getElementById("marker2").textContent == "O" &&
//       document.getElementById("marker4").textContent == "O" &&
//       document.getElementById("marker6").textContent == "O"
//     ) {
//       announceResult.textContent = "Player O Wins!";
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//     }
//   };
//   return { checkResult };
// })();
// //there's a bug in here
// //if you win at the last moment when all the squares are full
// //you get a tie
// function controlGame() {
//   if (gameBoard.boardArr.length == 9) {
//     gameResult.checkResult();
//     if (
//       announceResult.textContent == "Player X Wins!" ||
//       announceResult.textContent == "Player O Wins!"
//     ) {
//       return;
//     } else {
//       //freeze the gameBoard (container) div
//       document.getElementById("boardContainer").classList.add("freeze");
//       //announceResult.textContent = "tryy";
//       announceResult.textContent = "Tie!";
//     }
//   } else {
//     gameResult.checkResult();
//     setTimeout(controlGame, 200);
//   }
// }
// controlGame();
// //array that stores the indexes of squares taken
// var squaresPlaced = [];
// //module that returns the factory function that makes the computer make a move
// const computerMove = (() => {
//   //factory function that makes the computer make a move
//   const AIplay = () => {
//     //generate a random number that which DOES NOT CONTAIN any of the numbers in the squaresPlaced array
//     let len = 1;
//     let generateRandom = (len, squaresPlaced) => {
//       let randomArray = [];
//       for (let i = 0; i < len; ) {
//         //create a random number between 1 and 9
//         let random = Math.floor(Math.random() * 9 + 1).toString();
//         if (!squaresPlaced.includes(random) && !randomArray.includes(random)) {
//           randomArray.push(random);
//           i++;
//         }
//       }
//       //push the outcome
//       return squaresPlaced.push(randomArray.toString());
//     };
//     console.log(generateRandom(len, squaresPlaced));
//     //write it to the DOM
//     document.getElementById(
//       "marker" + squaresPlaced[squaresPlaced.length - 1]
//     ).textContent = "O";
//     playerTwo.play();
//   };

//   return { AIplay };
// })();
