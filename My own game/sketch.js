var air_to_air_Guns_Type1
var air_to_air_Guns_Type2

var space_Ship
var space_Ship_Sprite
var plane_Green1
var plane_Green1_Sprite
var plane_White1
var plane_White1_Sprite
var plane_Yellow1
var plane_Yellow1_Sprite

var Background_Clouds
var Background_Clouds_Sprite

var checker = false 

var Battle_Tank_Blue
var Battle_Tank_Green
var Heavy_Tank

var Patrol_Boat

var Chain_Gun_Turret

var Directional_Cannon_Blue
var Directional_Cannon_Green
var Directional_Cannon_Red
var Directional_Cannon_Yellow

var Gunship_Blue
var Gunship_Green
var Gunship_White

var Interceptors

var Double_Laser_Turret
var Laser_Turret

var Mantis_Heavy_Tank

var Railgun_Cannon_Blue

var Small_Boat

var Crashing_Sound
var Destroying_Sound
var Shooting_Sound

var MachineGun_Sound

var Battle_Tanks_Sound

var Aircraft_Boats_AA_Interceptors_Guns

var Cannon_Sound

var Laser_Turret_Sound

var RailGun_Sound


function preload(){
//preload images and sounds 
Background_Clouds = loadImage("Images/Background/BackGround_Clouds.png");
space_Ship = loadImage("Images/Aircrafts/Aircraft1.png");


}


function setup(){
createCanvas(windowWidth,windowHeight);
Background_Clouds_Sprite = createSprite(400,800,700,700);
Background_Clouds_Sprite.addImage("clouds-Image",Background_Clouds);
Background_Clouds_Sprite.scale = 8


space_Ship_Sprite = createSprite(700,550,100,100);
space_Ship_Sprite.addImage("Aircraft1.png",space_Ship);
space_Ship_Sprite.scale = 0.1


}
function draw(){
background("red");    
drawSprites()
fill("black")
console.log(mouseX);
console.log(mouseY);
textSize(40);
text(mouseX,20,50);
text(mouseY,20,80);
if(mousePressedOver(space_Ship_Sprite)){
    checker = true
}



if(checker == true){
    space_Ship_Sprite.x=mouseX
    space_Ship_Sprite.y=mouseY
}


camera.position.y = space_Ship_Sprite.y
}