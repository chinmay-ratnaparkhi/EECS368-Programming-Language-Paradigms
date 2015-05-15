function Speed(i) {
    this.speed = i;
    this.inc = function(delta) {
	    this.speed += delta;
    }
    this.reset = function() {
	    this.speed = 0;
    }
    this.toString = function() {
	    return "{ speed = " + this.speed + "}";
    }
}

main = function () {
    var o = new Speed(9234);
    console.log(o);
    o.inc(42);
    console.log(o);
    console.log("str " + o);
    console.log(o.speed);
}