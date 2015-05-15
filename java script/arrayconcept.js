main= function()
{
	var arr= new Array();
	arr[1]= "Hello";
	arr[2]= 2;
	for(var k in arr)
	{
		chalk.println(k+ " value "+arr[k]);
	}
	
	chalk.hr();
	arr[9]="World";
	for(var k in arr)
	{
		chalk.println(k + " " +arr[k]);
	}
	
}

