//your JS code here. If required.
const btn = document.getElementById("button")
const select = document.getElementById("colorSelect")
let option = select.options;

btn.addEventListener("click",clickMe)

function clickMe(){
	select.remove(option);
	
}