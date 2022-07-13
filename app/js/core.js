import Base from "./base.js";
import User from "./user.js";
import GameMapper from './gameMapper.js';
// import Browser from "./browser.js";

// calls of function
const playerNames = () => {
  return Base.NodeElement('player-form', true)
}

const initGame = () => {
  GameMapper.SetBlocks(9, Base.NodeElement('game-frame', true));
  GameMapper.AddEvent('click', Base.NodeElement('.block', false));
  playerNames().style.display = 'block';
}
// initialize game
initGame();


// on game reset
GameMapper.GameReset(
  Base.NodeElement('reset-game', true), 
  ()=> { initGame() });
User.SetPlayers(playerNames());