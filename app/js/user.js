import Browser from "./browser.js";

const SetPlayers = (nodeElement) => {
  nodeElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const px = document.getElementById('player-x').value;
    const po = document.getElementById('player-o').value;
    Browser.SetStorageData({playerX: px ? px : 'X', playerO: po ? po : 'O' })
    nodeElement.style.display = 'none';
  });
}

export default { SetPlayers }