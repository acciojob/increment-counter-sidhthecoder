//your JS code here. If required.
let counter=document.getElementById("counter");
let incrementBtn=document.getElementById("incremetBtn");
let count=0;
function increment(){
	count=count+1;
	alert(counter.innerText=count);
}

incrementBtn.addEventListener("click",increment);

