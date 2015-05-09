# EECS368-Programming-Language-Paradigms
KU - Spring 2014 (Dr. Andrew Gill)


Final Project 

For my final project I decided to make a game I enjoyed as a child. I felt I was the most comfortable with JavaScript for the project. I researched a little bit and found out about JSGL (JavaScript Graphics Library) and decided to use it for the project as they have great documentation on how to use the library to draw graphics, make animations and catch mouse events. 
	My game involves a main character with a bow and arrow. He follows the Y-Position of the mouse to navigate up and down the screen and shoots on a mouse-click event. There are bubbles/balloons going from bottom to the top of the screen and the goal is to shoot them all. The game starts with a stock of 10 arrows. For every popped bubble, the score is bumped up by 10 points. If the player succeeds to shoot down all the bubbles, the stage is concurred. The player proceeds to the next stage and gets 5 more arrows added to the stock.
	Every stage is more challenging than the last as the speed of the bubbles increases. Technically, duration of the animation is decreased by 1000ms if it is more than 2000ms. The balloons change their X coordinate every time they come around. If the user runs out of arrows before all the bubbles are popped, the screen reads, “You ran out of arrows” and shows the final score of the player. Although very challenging, it is not impossible to win the game. If the user completes all the 10 stages, the screen shows a message with a big smiley face “You Won!”
	To mention a few technicalities of the game, there are a few key functions that are reused through the course of 10 stages. The game starts by setting up the “state variables” (e.g. Stage= 1, Score =1) and calling the “updateScore” function with the two values.  This function is called every time the arrow hits a bubble to bump the score up and also to determine whether a stage has been completed or the if the player has run out of arrows. There is an Array of balloons which is filled with 10 balloons at the beginning of every stage by calling the function “create_balloon” that returns balloons.  This function calls another function called “getRandomColor” to create multicolored ballons.
	The arrow is actually made of two objects the pointer and the tail because a balloon should pop only when hit by the tip of the arrow. Also, touching of arrow and balloon is determined by if the position of pointer is within a certain range of X and Y coordinate values rather than a specific point, to respect the radius of the balloon and not just the center. 

Overall, this project helped me develop a better understanding of how JavaScript handles graphics. The designing process was exciting, although, I learned more from debugging my way through various flaws and problems in the game.

Graphics Library Used : JSGL (http://www.jsgl.org/doku.php)
