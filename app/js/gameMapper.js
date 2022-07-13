import Browser from "./browser.js";

// set the winning condition
let emptyBlocks = ['', '', '', '', '', '', '', '', ''];
const winningBlocks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let lastText = '';
let onGame = true;


// create sets of tile blocks
const SetBlocks = (count, nodeElement) => {
  // set the number of blocks to appear
  for(var i = 0;i < count;i++){
  
    // create div element
    const block = document.createElement("div");
  
    // add block class 
    block.classList.add("block");
    
    // add data attribute for unique number
    block.dataset.blockId = i;

    // append each created element
    nodeElement.appendChild(block)
  }
}

const AddEvent = (type, nodeElement) => {
  // add event listener for each element 
  // by indicating what type of event
  nodeElement.forEach(block => {
    block.addEventListener(type, onBlockClick)
  });
}

const onBlockClick = (e) => {
  // get target data attribute
  const target = e.target;
  let dataAttr = target.getAttribute('data-block-id');

  if(!onGame) return;

  const tmpVal = lastText == 'O' ? 'X' : 'O';
  lastText = tmpVal;
  target.innerText = tmpVal;

  emptyBlocks[dataAttr] = lastText;

  checkResult(lastText)
}

function checkResult(lastText) {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
      const winBlock = winningBlocks[i];
      const a = emptyBlocks[winBlock[0]];
      const b = emptyBlocks[winBlock[1]];
      const c = emptyBlocks[winBlock[2]];

      if (a === '' || b === '' || c === '') {
          continue;
      }
      if (a === b && b === c) {
          roundWon = true;
          break;
      }
  }

  if (roundWon) {
    setResult('')
    return;
  }
  if (!emptyBlocks.includes('')) {
    setResult('No winner')
  }
}


const setResult = (result) => {
  let storage = Browser.GetStorage();

  if(!result){
    if(storage){
      console.log(storage);
      result = lastText == 'X' 
      ? 'Player ' + storage.playerX + ' wins' 
      : 'Player ' + storage.playerO + ' wins'; 
    }else{
      result = lastText == 'X' ? 'Player X wins' : 'Player O wins'; 
    }

    onGame = false;
  }
  Browser.SetStorageData({lastResult: result});
  playerEvent(result);
}

const playerEvent = (result) => {
  document.getElementById('event').innerText = result;
}

const GameReset = (nodeElement, callBack) => {
  // on game reset, set new blocks
  nodeElement.addEventListener('click', () => {
    const cont = document.getElementById('game-frame');
    cont.innerHTML = '';
    callBack();
    onGame = true;
    lastText = '';
    emptyBlocks = ['', '', '', '', '', '', '', '', ''];
    window.localStorage.clear();
    playerEvent('');
  })
}

export default { SetBlocks, AddEvent, GameReset }