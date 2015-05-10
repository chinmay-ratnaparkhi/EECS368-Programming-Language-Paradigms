$(function(){
var input = $("#user_in");				
input.on('keyup',function(e) { 
	var toCheck= input.val();
		if (toCheck.length==0){
			$("#user_out").text("");
			$("#user_out").css("color","black");
		}else if(!isNaN(parseInt(toCheck, 10))){ 
			$("#user_out").text(factorial(toCheck)); 
			$("#user_out").css("color","black");
		}else{
			$("#user_out").text("?");
			$("#user_out").css("color","red");
		}
	});
});      
  
factorial= function(candidate){
if(candidate==0) return 1;
else return candidate*factorial(candidate-1);	
}