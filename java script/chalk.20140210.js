// Chalk - EECS 368's library for teaching and understanding JavaScript
// Version 20140207
//
var chalk = {
    print: function(str) {
            $("#chalk").append(str.replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/>/g, '&gt;'));
    },
    newline: function() {
            $("#chalk").append("<BR/>");
    },
    hr: function() {
            $("#chalk").append("<hr/>");
    },
    println: function(str) {
            chalk.print(str);
            chalk.newline();
    },
    callback: function(o) {
	switch (typeof o) {
	case "object":
	if (typeof (o.entrybox) == "function") {
		var input = $("<input/>");
		$("#chalk").append(input);
		$("#chalk").append("<BR>");
		input.attr("size",72);
		input.css("color","red");
		input.focus();
		input.on('keyup',function(e) { 
			if (e.keyCode == 13) {
			    input.off(); 
			    var str = input.val();
			    input.attr("disabled",true);
			    input.css("background","#f8f8f8");
			    chalk.callback(o.entrybox(str));
			}
		    });
	    }
	    break;
	default:
	    break;
	}


    }
}


// Do this when document is ready
$(function(){
        $("#chalk").css("border","solid black 1px");
        $("#chalk").css("background","#eeeeee");
        chalk.callback(main());
});        
