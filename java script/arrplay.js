var arr_length= 50;
main= function()
{
	var arr= new Array(arr_length);
	
	var a= "arc";
	var b= "sand";
		var c= "dark";

	arr.unshift(a);
		arr.unshift(b);
			arr.unshift(c);

	printer= function(arr)
			{
				for(var k in arr)
				{
					chalk.println(arr[k]);
				}
			}
	
	printer(arr);		
	chalk.println("\n\n\n");
	arr.sort();
	printer(arr);
	
};