#!/usr/bin/env node
console.log("Starting Script");

var fs = require('fs');
var outfile = "hw1part2out.txt";

var p100 = [];

function isPrime(n) {
var flag = "n";
	for (c = 2; c < n; c++) {
		if (n%c === 0) {
			flag = "n";
			return false;
		}
		flag = "y";
	}
	if (flag === "y") {
		return true;
	}
}



var primeNumbers = function(k) {
console.log("ins 1");
p100[0] = 2;
var i = 1;

for (j = p100[i-1] + 1; i < k; j++) {
	if (isPrime(j) === true) {
		p100[i] = j;
		i = i + 1;
		}
	}
};


console.log(primeNumbers(100));
console.log(p100);
fs.writeFileSync(outfile, p100);
console.log("Ending Script");
