var gameWidth = 640;

var gameHeight = 320;

var player = {
    x: 300, // X position of the player, distance to the right of the upper top left corner.
    y: 220, // Y position of the player, distance down from the upper top left corner.
    h: 50, //Height of the player
    w: 20, //Width of the player
    playerColor: 'tan', //color of the player
    speed: 3,
    isMoving: false, //checks if the player is moving
}

var ground = { //dimentions of the ground
    x: 0,
    y: 270,
    h: 50, //must be same height as the player for collision to work properly
    w: gameWidth, //ground takes up the entire width of the game-area
    groundColor: '#3b2508'
}

var walkLeft = function() {
    player.x = player.x - player.speed;
}

var walkRight = function() {
    player.x = player.x + player.speed;
}

var stopWalk = function() {
    player.x = player.x
}

var canvas = document.getElementById("mycanvas"); //looks at the canvas I think...
      var ctx = canvas.getContext("2d"); //gets context that it's 2d I guess.

      window.addEventListener("keydown", keyPress, false); //if any key is pressed it calls keyPress
    window.addEventListener("keyup", keyUnPress, false); //if any key stops being pressed it calls KeyUnPress

    function keyPress(e) { //if a key is pressed
        if (e.keyCode == "37") { //and that key's keycode is 37 (left arrow)
            walkLeft() //call walkLeft
        }
        else if(e.keyCode == "39") { //and that key's keycode is 39 (right arrow)
        walkRight() //call walkRight
    }
    }
  
  function keyUnPress(e) { //if a key stops being pressed
      if (e.keyCode == "37") { //and that key's keycode is 37 (left arrow)
        stopWalk()
      }
  }
  function keyUnPress(e) { //if a key stops being pressed
    if (e.keyCode == "39") { //and that key's keycode is 39 (right arrow)
        stopWalk()
    }
  }


var update = function() { //updates the current position of the elements that changed (ie: if the player moves)

    

};


var draw = function() { //draws all changes on the canvas
  
    ctx.clearRect(0,0,gameWidth,gameHeight); //clears the canvas from the upper left corner, to the bottom right W,H,W,H

    //the player being drawn

    ctx.fillStyle = player.playerColor; //chooses the player's color, what it will fill in 'player' with

    //remember to capitalize the second part word fill(S)tyle!!!

ctx.fillRect(player.x, player.y, player.w, player.h); //fills in the space between the coodinates of the 
                                                      //dimentions of the player

  ctx.fillStyle = ground.groundColor; //chooses the ground's color, what it will fill in 'ground' with

ctx.fillRect(ground.x, ground.y, ground.w, ground.h); //fills in the space between the coodinates of the 
                                                      //dimentions of the ground
};

var step = function() { //everytime step is called


    update(); //it will call update first
    draw(); //then it will call draw

    window.requestAnimationFrame(step); //umm... idk what this does
};

    step(); //calls step (so kinda a loop.)


