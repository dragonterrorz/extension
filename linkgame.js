function linkGroupGame() {
  if (True) {
    document.getElementById("tutorial-id").style.display = "none"
    document.getElementById("after-link").style.display = "block"
    document.getElementById("linked-game").style.display = "none"
//set groupGameId to my game id!
    chrome.storage.local.set({"linkedGroupGameId": groupGameId }, function () {   });
  } 
  
  else {
  }
}
