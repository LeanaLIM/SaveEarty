let i=0;
let score=0;

document.addEventListener("DOMContentLoaded", function() {
  const playableArea = document.querySelector(".playable-area");
  const enemyContainer = document.createElement("div");
  enemyContainer.className = "enemy-container";
  playableArea.appendChild(enemyContainer);

  const movableElement = document.querySelector(".Earty");
  let currentLeftPosition = 0;
  let currentTopPosition = 0;  
  const step = 20;

  document.addEventListener("keydown", function(event) {
    const areaWidth = playableArea.clientWidth - movableElement.clientWidth;
    const areaHeight = playableArea.clientHeight - movableElement.clientHeight;

    if (event.key === "ArrowLeft" && currentLeftPosition - step >= 0) {

      currentLeftPosition -= step;
      movableElement.style.left = currentLeftPosition + "px";
      movableElement.style.transform = "scaleX(-1)";
    } else if (event.key === "ArrowRight" && currentLeftPosition + step <= areaWidth) {
      currentLeftPosition += step;
      movableElement.style.left = currentLeftPosition + "px";
      movableElement.style.transform = "scaleX(1)";

}});

  function createEnemy() {
    const areaWidth = playableArea.clientWidth - movableElement.clientWidth;
    const enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.left = Math.floor(Math.random() * areaWidth) + "px";
    enemyContainer.appendChild(enemy);
    enemy.style.backgroundImage = "url('enemy.svg')";
    enemy.style.backgroundSize = "cover";
  }

  function createPresent() {
    const areaWidth = playableArea.clientWidth - movableElement.clientWidth;
    const present = document.createElement("div");
    present.className = "present";
    present.style.left = Math.floor(Math.random() * areaWidth) + "px";
    present.style.backgroundImage = "url('present.svg')";
    present.style.backgroundSize = "cover";
    enemyContainer.appendChild(present);

}

function movePresent() {
  const presents = document.querySelectorAll(".present");
  const descentSpeed = 2;

  presents.forEach(present => {
      const currentTop = parseFloat(present.style.top) || 0;
      present.style.top = currentTop + descentSpeed + "px";

      const movableRect = movableElement.getBoundingClientRect();
      const presentRect = present.getBoundingClientRect();

      if (
          movableRect.top < presentRect.bottom &&
          movableRect.bottom > presentRect.top &&
          movableRect.left < presentRect.right &&
          movableRect.right > presentRect.left
      ) {

          present.remove(); 
          score += 1; 
          document.querySelector(".score").innerHTML = 'Score :' + score; 
          i+=.1
          console.log("Score: " + score);

          
          present.style.top = "0";
      }
  });

  requestAnimationFrame(movePresent);
}

  function moveEnemies() {
    const enemies = document.querySelectorAll(".enemy");
    const descentSpeed = 2 + i;
  
    enemies.forEach(enemy => {
      const currentTop = parseInt(enemy.style.top) || 0;
      enemy.style.top = currentTop + descentSpeed + "px";
  

      const movableRect = movableElement.getBoundingClientRect();
      const enemyRect = enemy.getBoundingClientRect();
  
      if (
        movableRect.top < enemyRect.bottom &&
        movableRect.bottom > enemyRect.top &&
        movableRect.left < enemyRect.right &&
        movableRect.right > enemyRect.left
      ) {
        enemy.remove();
        alert("Game Over! Un méchant Elfe a volé les cadeaux d'Earty :( \nTu as fait un score de " + score + " points");
        window.location.reload();
      }
    });
  
    requestAnimationFrame(moveEnemies);
  }

  setInterval(createEnemy, 2000);
  setInterval(createPresent, 5000); 
  moveEnemies(); 
  movePresent()
});
