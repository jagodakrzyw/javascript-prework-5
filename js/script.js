const getMoveName = function (argMoveId){
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

const displayResult = function(argComputerMove, argPlayerMove){
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

const playGame = function(playerInput){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);

  const playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  console.log('moves:', computerMove, playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
})

document.getElementById('play-papier').addEventListener('click', function(){
  playGame(2);
})

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
})