

//test ms to complete function
function timeTester(fn){
	var times=[]; //average result times
		
	for (t=100;t--;){ // number of tests to run
		//generate array of random ints
		var randomArray = [];
		for (i=100000;i--;)
			randomArray.push(~~(Math.random() * 1000)); // ~~rounds


		var before1 = Date.now();
		fn.call(null,randomArray) 
		times.push( Date.now()-before1 )
	}

	return times.reduce(function (a, b) {
	    return a + b;
	})/times.length;

}
