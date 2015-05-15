fac= function(n)
{
	if(n<1) return 1;
	else return n*fac(n-1);
}

main= function()
{
	chalk.println("Factorial of 5 = " + fac(5));
}