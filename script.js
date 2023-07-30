//your JS code here. If required.
let counter=document.getElementById("counter");
let incrementBtn=document.getElementById("incrementBtn");
let count=0;
function increment(){
	count=count+1;
	counter.innerText=count
	alert(count);
}

incrementBtn.addEventListener("click",increment);

