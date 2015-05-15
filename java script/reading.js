guess = function(n) {
	chalk.print("Guess a number:");

	return { entrybox: function(str){
			var m = parseInt(str);
			    if (m > n) 
                           {
			        chalk.println("to high");
			        return guess(n);
			    }
                           else if (m < n)
                           {
		 	         chalk.println("to low");
			         return guess(n);
			   } else {
			         chalk.print("Well done! You win a cookie");
			         return;
			   }
		    }
	        };
}

main = function ()
{
   return guess(4);
}
