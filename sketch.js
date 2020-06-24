// You could have multiple flags like: start, launch to indicate the state of the game.
var start, launch;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



const {Engine} = Matter; 
//is the same as c
const Engine = Matter.Engine;



function setup() {
    //Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.
                                                       
    var background = createCanvas(400,400);                  

}

function draw() {
// Remember to update the Matter Engine and set the background.
update(Matter.engine);
}
                                              

function keyReleased() {
    // Call the shoot method for the cannon.
}