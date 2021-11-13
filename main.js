var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
player_update()

function player_update()
{
fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
})
canvas.add(player_object);


});
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:player_y,
left:player_x
})
canvas.add(block_image_object);


});
}

keypressed = "";

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
if(keypressed == "87"){
new_image("wall.jpg");
}

if(keypressed == "116"){
    new_image("trunk.jpg");
    }

        if(keypressed == "44"){
            new_image("dark_green.png");
            }

            if(keypressed == "108"){
                new_image("light_green.png");
                }
            
                if(keypressed == "103"){
                    new_image("ground.png");
                    }

                    if(keypressed == "89"){
                        new_image("yellow_wall.png");
                        }

                        if(keypressed == "99"){
                            new_image("cloud.jpg");
                        }

                        if(keypressed == "117"){
                            new_image("unique.png");
                        }

if(e.shiftKey == true && keypressed == "80")
{
console.log("p and shift pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftkey == true && keypressed == "77")
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}



if(keypressed == '38'){
up()
console.log("Up")
}

if(keypressed == '40'){
    down()
    console.log("Down")
    }

if(keypressed == '37'){
    left()
    console.log("Left")
    }

if(keypressed == '39'){
    right()
    console.log("Right")
    }
}



function up() {
if(player_y>=0){
player_y = player_y - block_image_height;
console.log("Block image height = "+ block_image_height);
console.log("when up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}

function down() {
 if(player_y>=0){
player_y = player_y + block_image_height;
console.log("Block image height = "+ block_image_height);
console.log("when down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
        }



}


function left() {
    if(player_x>=0){
        player_x = player_y - block_image_height;
        console.log("Block image height = "+ block_image_height);
        console.log("when left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
        }


    
}


function right() {
    if(player_x>=0){
        player_x = player_x + block_image_height;
        console.log("Block image height = "+ block_image_height);
        console.log("when right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
        }
}