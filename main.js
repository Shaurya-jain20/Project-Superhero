var canvas = new fabric.Canvas('myCanvas');

superhero_x = 10;
superhero_y = 10;

superhero_width = 30;
superhero_height = 30;

var superhero = "";
var superhero= "";
function superhero_chanes()
{
    fabric.Image.fromURL("ironn man face.png", function(Img) {
    player_object = Img;

    superhero_width.scaleToWidth(150);
       superhero_height.scaleToHeight(140);
    superhero_x
    superhero_y.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);



    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        new_image("ironn man face.png"); 
        console.log("w");
    }
}
