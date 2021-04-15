"use strict";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let dx = [-4, 0, 4];
let dy = [-4, 0, 4];
let cur_x = myCanvas.width/2; //current x-coordinate
let cur_y = myCanvas.height/2; //current y-coordinate

let pressedDown = new Map(); //a map that keeps track of which keys are currently pressed down

document.addEventListener("keydown", function(event){
    if(event.key=="ArrowLeft"){ //left
        pressedDown.set("left",true)
    }
    else if(event.key=="ArrowUp"){ //up
        pressedDown.set("up",true)
    }
    else if(event.key=="ArrowRight"){ //right
        pressedDown.set("right",true)
    }
    else if (event.key=="ArrowDown"){ //down
        pressedDown.set("down",true);
    }

    let idx_x;
    let idx_y;
    if(pressedDown.get("left")==true && pressedDown.get("up")==true){
        idx_x = 0;
        idx_y = 0;
    }
    else if(pressedDown.get("left")==true && pressedDown.get("down")==true){
        idx_x = 0;
        idx_y = 2;
    }
    else if(pressedDown.get("right")==true && pressedDown.get("up")==true){
        idx_x = 2;
        idx_y = 0;
    }
    else if(pressedDown.get("right")==true && pressedDown.get("down")==true){
        idx_x = 2;
        idx_y = 2;
    }
    else if(pressedDown.get("left")==true){
        idx_x = 0;
        idx_y = 1;
    }
    else if(pressedDown.get("up")==true){
        idx_x = 1;
        idx_y = 0;
    }
    else if(pressedDown.get("right")==true){
        idx_x = 2;
        idx_y = 1;
    }
    else if(pressedDown.get("down")==true){
        idx_x = 1;
        idx_y = 2;
    }
    else{
        idx_x = 1;
        idx_y = 1;
    }

    if(!(cur_x+dx[idx_x]<0 || cur_x+dx[idx_x]>myCanvas.width || cur_y+dy[idx_y]<0 || cur_y+dy[idx_y]>myCanvas.height)) {
        ctx.beginPath();
        ctx.moveTo(cur_x, cur_y);
        ctx.lineTo(cur_x+dx[idx_x], cur_y+dy[idx_y]);
        ctx.stroke();
        cur_x+=dx[idx_x];
        cur_y+=dy[idx_y];
    }
});

document.addEventListener("keyup", function(event){
    if(event.key=="ArrowLeft"){ //left
        pressedDown.set("left",false)
    }
    else if(event.key=="ArrowUp"){ //up
        pressedDown.set("up",false)
    }
    else if(event.key=="ArrowRight"){ //right
        pressedDown.set("right",false)
    }
    else if(event.key=="ArrowDown"){ //down
        pressedDown.set("down",false)
    }
});


//speed buttons
slow.addEventListener("click", function(event){
   dx=[-4,0,4];
   dy=[-4,0,4];
});


moderate.addEventListener("click", function(event){
    dx=[-10,0,10];
    dy=[-10,0,10];
});

fast.addEventListener("click", function(event){
    dx=[-50,0,50];
    dy=[-50,0,50];
});

//color buttons
black.addEventListener("click", function(event){
    ctx.strokeStyle = "#000000";
});


red.addEventListener("click", function(event){
    ctx.strokeStyle = "#ff0000";
});

blue.addEventListener("click", function(event){
    ctx.strokeStyle = "#0000ff";
});

green.addEventListener("click", function(event){
    ctx.strokeStyle = "#008000";
});

//thickness buttons
thin.addEventListener("click", function(event){
    ctx.lineWidth = 1;
});

normal.addEventListener("click", function(event){
    ctx.lineWidth = 3;
});

thick.addEventListener("click", function(event){
    ctx.lineWidth = 10;
});

//other buttons
clear.addEventListener("click", function(event){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
});




