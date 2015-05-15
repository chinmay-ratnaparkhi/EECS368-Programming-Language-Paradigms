main= function()
{
	var obj= new Object();
	obj["a"] = "Hello";
	obj.b= "World";
	
	for (var k in obj) chalk.println(k+" "+obj[k]);

	chalk.println("\n");
	chalk.println(obj.a);
	chalk.println(obj["a"]);
	chalk.println(obj["b"]);
	chalk.println(obj.b);
};