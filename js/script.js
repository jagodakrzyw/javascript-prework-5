function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce'; 
  } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
  if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
  (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
  (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else {
    printMessage('Tym razem przegrywasz!')
  }
}

console.log('moves:', computerMove, playerMove);

displayResult(computerMove, playerMove);