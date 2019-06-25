//1)sigma
function sigma(num) {
	var sum=0
	for (var i = num - 1; i >= 1; i--) {
		sum+=num;
	}
	return sum;
}

console.log(sigma(3));

//2) Factorial 
function fact(num){
	for (var i = num - 1; i > 0; i--) {
		num=i*num;
	}
	return num;
}
console.log(fact(5));

//*3) Fibonacci  Recursion
function fib(num){
	if (num==0 ||num==1){
		return num;
	}
	else{
		return (fib(num-1)+fib(num-2));
	}
}
console.log(fib(7));

//4) Array: Second-to-Last:   
function ndLast(arr){
	if (arr<2){
		return null;
	}
	else {
		return arr[arr.length-2]
	}
}
console.log( ndLast([42, true, 4, "Liam", 7]));

//5) Array: Nth-to-Last
function ndLast(arr,Y){
	if (Y>arr.length){
		return null;
	}
	else {
		return arr[arr.length-Y]
	}
}
console.log( ndLast([5,2,3,6,4,9,7],3));