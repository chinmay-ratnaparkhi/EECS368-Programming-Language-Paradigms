validate_size = function() {
	chalk.print("What size of square do you want?");

	return { entrybox: function(str){
			var size = parseInt(str);
			    if (size < 4 || size> 20) 
                           {
			        chalk.println("Out of range, try again.");
			        return validate_size();
			    }else {
			         print_square(size);
			         return;
			   }
		    }
	        };
}



print_square = function(given_size)
{
	for(var i= 0; i<given_size; i++)
	{
			for(var j= 0; j<given_size; j++)
			{
				chalk.print("* ");
			}
		chalk.newline();
	}

}




main = function ()
{
	return validate_size();
}