console.log(__filename);//this will prints filename of the project.
console.log(__dirname);//this will prints directory of the project.

//-------------------------------------------
/*SET TIMEOUT*/
function timeout(){
//this will print after 4000 milliseconds;
  console.log('This was from setTimeout');
}
//the printStuff function will call After 4000 milliseconds;
setTimeout(timeout,4000);

//-------------------------------------------
/*SET INTERVAL*/
function interval() {
  //this will print every 2000 milliseconds;
console.log('This was from setInterval');
}
/* the setInterval will prints the interval function
every 2000 milliseconds untill it will terminate manually*/
setInterval(interval,2000);

//-------------------------------------------
/*SET IMMEDITE*/
function immediate(){
  //this will prints immediatlly
  console.log('This was for setImmediate');
}
setImmediate(immediate);
