var columns = 30;
var rows = 30;
var cellW;
var cellH;
var dotSize = 10;
function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    noStroke();
}
function draw(){
    background(0,80,80);
    //nested loop
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            push();
                //calculate coordinates
                var x = i * cellW + cellW/2;
                var y = j * cellH + cellH/2;
                //translate to the center of cell
                translate(x,y);
                //rotate each cell a different amount
                rotate(frameCount+x+y);
                //draw dot off from the center of the cell
                fill(255,200,255);
                ellipse(cellW/2,0,dotSize);
            pop();
            
        }
    }
}