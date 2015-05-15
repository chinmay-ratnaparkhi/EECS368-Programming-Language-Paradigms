main = function()
{
	var x = 1;
	while (x*x < 10000){
		chalk.print(x*x+" ");
		if(x%8 == 0)
		{
			chalk.newline();
		}
		x++;
	}

}