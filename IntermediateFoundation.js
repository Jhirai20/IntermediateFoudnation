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

//6) Array: Second-Largest:
function sort(arr) {
	var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
	return arr
}

function SndLarg(arr){
	sort(arr)
	return arr[arr.length-2]
}
console.log(SndLarg([42,1,4,3.14,7]));

//7) Double Trouble:
function double(arr) {
	var arrnew=[]
	for (var i = 0; i < arr.length; i++) {
		arrnew.push(arr[i]);
		arrnew.push(arr[i]);
	}

	return arrnew;
}
console.log(double([4, "Ulysses", 42, false]));


//Part 2 Fibonacci  Recursion
function fib(num){
	if (num==0 ||num==1){
		return num;
	}
	else{
		return (fib(num-1)+fib(num-2));
	}
}
console.log(fib(7));