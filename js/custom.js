/* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
  Calulator Functionality JS Code  !
~=~=~=~=~=~=~=~=~=~=~=~=~=~=~+~= */

function calculate(val){
	document.getElementById("display").value += val;
}
function total(){
	let result = document.getElementById("display").value;
	document.getElementById("display").value = eval(result);
}
function clr(){
	document.getElementById("display").value = null; 
}