//State Variables
var player_alive= true;
var renderThese= 10;
var score= 0;
var stage= 1;
var arrows= 10;
var balloonSpeed=10000;
var shot_speed = 3000;

//ScoreKeeping      
var score_text1='<table align="center" border="0" cellpadding="1" cellspacing="1" style="width: 500px;"><tbody><tr><td><span style="font-size:22px;"><strong>Score :  ';
var score_text2='</strong></span></td><td><span style="font-size:22px;"><strong>Stage :  ';
var score_text3='</strong></span></td></tr><tr><td><span style="font-size:22px;"><strong>Arrows Left :  ';
var score_text4='</td><td></td></tr></tbody></table>';

var element = document.getElementById("scoreboard");
function updateScore(){
	if(arrows >= 0)
	{
		if(score >= 100*stage)
		{	
			//A  level has been completed. Increment to next level.
			alert("Congratulations! Level : "+stage+" complete!");
			stage++;
			arrows=arrows+5;
			element.innerHTML = score_text1+score+score_text2+stage+score_text3+arrows+score_text4;
			increment();
		}
		else{
				//A new balloon is shot. Bump the score.
				element.innerHTML = score_text1+score+score_text2+stage+score_text3+arrows+score_text4;
			}
	}
	else
		{
			//No arrows left. Player loses. Disable everything.
			alert("You ran out of Arrows!!");
			player_alive= false;
			document.writeln('<p></p><p></p><p></p><p style="text-align: center;"><span style="font-size:28px;"><strong>You have no arrows left! </strong></span></p><br><br><p style="text-align: center;"><span style="font-size:28px;"><strong>Final Score : '+score+'</strong></span></p><p style="text-align: center;">Please refresh to restart.<br><img src= "happy.jpg"></p>');
		}
};
//Call the function once to initiate everything.
updateScore(score, stage);

//Graphic Elements - Loaded Once and For All
var myPanel = new jsgl.Panel(document.getElementById("panel"));
//Declare and initiate the Hunter
var hunter = myPanel.createImage();
	hunter.setUrl("./hunter.jpg");
	hunter.setSizeWH(120,240);
	hunter.setOpacity(1); 		// visible always until stated otherwise
//Declare and initiate the arrow
var pointer = myPanel.createImage();
	pointer.setUrl("./arrow_point.gif");
	pointer.setSizeWH(20,20);
	pointer.setOpacity(0); 		//makes it invisible until a click event has occurred
var tail = myPanel.createImage();
	tail.setUrl("./arrow_back.png");
	tail.setSizeWH(100,20);
	tail.setOpacity(0); 		//makes it invisible until a click event has occurred 

//Add all the newly created objects to the Panel.
myPanel.addElement(pointer) 
myPanel.addElement(tail);
myPanel.addElement(hunter) 

//If the stage is completed, update the state variable values.
function increment()
{
	//Reset the number of required bubbles
	renderThese= 10;
	if (balloonSpeed > 2000)
	{
		balloonSpeed-= 1000;
	}
	else{
			player_alive= false;
			document.writeln('<p></p><p></p><p></p><p style="text-align: center;"><span style="font-size:28px;"><strong>You won! </strong></span></p><br><br><p style="text-align: center;"><span style="font-size:28px;"><strong>Final Score : '+score+'</strong></span></p><p style="text-align: center;">Please refresh to restart.<br><img src= "happy.jpg"></p>');
		}
	
	if(shot_speed > 500) shot_speed-= 200;

	//Safety Measure - Empty the whole array.
	while(balloons.length > 0)
	{
		balloons.pop();
	}

	//Fill the array back with new balloons	
	for(i=1; i<=renderThese; i++)
	{
		balloons[i] = create_balloon();
	}
	
	//Reset the animators with new durations.
	myAnimator.setDuration(balloonSpeed);
	myAnimator.init();
	myAnimator.play();
	set_shot.setDuration(shot_speed);
	set_shot.init();
	set_shot.play();
}

//Array to hold the balloons
var balloons= new Array();
for(i=1; i<=renderThese; i++)
{
	balloons[i] = create_balloon();
};

//The balloon generator
function create_balloon()
{
	balloon = myPanel.createCircle();
	balloon.setRadius(20);
	balloon.setCenterLocationXY(350+(450*Math.random()),0);
	balloon.getStroke().setWeight(1);
	// assign a random color to every balloon
	balloon.getFill().setColor(getRandomColor());
	balloon.getFill().setOpacity(0.5);
	return balloon;
}

//Random color generator
function getRandomColor() {
	var col_val = Math.ceil(255*Math.random());
		var stringed1 = col_val.toString();
	col_val = Math.ceil(255*Math.random());
		var stringed2 = col_val.toString();
	col_val = Math.ceil(255*Math.random());
		var stringed3 = col_val.toString();
	var color = "rgb("+ stringed1+","+stringed2+","+stringed3+")"; 
return color;
}

//Animate the balloons
var myAnimator = new jsgl.util.Animator();
	myAnimator.setStartValue(0);
	myAnimator.setEndValue(100);
	myAnimator.setDuration(balloonSpeed);
	myAnimator.setRepeating(true);
	myAnimator.addStepListener(function(t){
	
	if(player_alive== true)
	{
		var y_position=0;
		for(i=1; i<=renderThese; i++)
		{
			myPanel.addElement(balloons[i]);
			y_position= 750-750*t/100
			balloons[i].setCenterY(y_position);
			if(y_position >= 730) balloons[i].setCenterX(350+(450*Math.random()));	

			//Removing touched balloons			
			if(pointer.getX() >= (balloons[i].getCenterX()-30) && pointer.getX() <= (balloons[i].getCenterX()+10) 
				&& pointer.getY() >= balloons[i].getCenterY()-20 && pointer.getY() <= balloons[i].getCenterY()+20)
			{
				/*	Remove the current object from Panel and the Array. As it does not
					need to be rendered again. Shift all the succeeding balloons one spot back
					and reduce the number of total balloons to be rendered. */
				myPanel.removeElement(balloons[i]);
				for(k=i; k<= renderThese; k++)
				{
					balloons[k]= balloons[k+1];
				}
				renderThese--;
				score=score+10;
				updateScore();
			}				
		}
	}
});

//The arrow Animation
var set_shot = new jsgl.util.Animator();
	set_shot.setStartValue(150);
	set_shot.setEndValue(950);
	set_shot.setDuration(shot_speed);
	set_shot.setRepeating(false);
	set_shot.addStepListener(function(t)
	{ 
		if(player_alive==true)
		{
			pointer.setLocationXY(t, pointer.getY());
			tail.setLocationXY(pointer.getX()-100, pointer.getY());						
		}
	});
set_shot.init(); 

// Listen for the Click event and play the Arrow Animation
myPanel.setCursor(jsgl.Cursor.POINTER);
myPanel.addClickListener(function(eventArgs) 
{
	set_shot.play();
	if(pointer.getX() < 300)
	{
		/* 	If the arrow has not been shot yet, make the Y-coordinate of the arrow
			match the Y-coordinate of the Mouse */
		pointer.setY(eventArgs.getY()-10);
		tail.setLocationXY(pointer.getX()-100, pointer.getY());						
		hunter.setY(eventArgs.getY()-90);
		
		// Reduce the number of arrows and check if user has run out of them
		arrows--; 
		updateScore();
	}
	if(pointer.getOpacity()==0)
	{
		pointer.setOpacity(1);
	}
	if(tail.getOpacity()==0)
	{
		tail.setOpacity(1);
	}			
});

//Move the player character with the mouse as it moves
myPanel.addMouseMoveListener(function(eventArgs){
			hunter.setY(eventArgs.getY()-90);
		}); 

// Initiate the Balloon Animator and play.
myAnimator.init();
myAnimator.play();