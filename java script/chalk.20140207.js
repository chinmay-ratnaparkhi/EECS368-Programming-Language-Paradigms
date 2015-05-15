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
    }
}

// Do this when document is ready
$(function(){
        $("#chalk").css("border","solid black 1px");
        $("#chalk").css("background","#eeeeee");
        main();
});        
