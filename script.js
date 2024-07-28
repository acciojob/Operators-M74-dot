//your JS code here. If required.
document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('calculate').addEventListener('click',function(){
		const num1 = document.getElementById('num1').value;
		const num2 = document.getElementById('num2').value;
		const operator = document.getElementById('ops').value;
		let result;

		if(!isNaN(num1) && !isNaN(num2)){
			switch(operator){
				case 'plus':
					result = num1 + num2;
					break;
				case 'minus':
					result = num1 - num2;
					break;
				case 'mult':
					result = num1 * num2;
					break;
				case 'divide':
					if(num2!==0){
						result = num1 / num2;
					}else{
						result = "cannot divide by zero";
					}
					break;
				default:
					result = "Invalid Operator";
			}
		}else{
			result="Invalid Input";
		}
		document.getElementById('result').textContent = result;
	});

	document.getElemetnById('change_text').addEventListener('click',function(){
		const divs = document.getElementsByClassName('division');
		const newVal = ['Bye','Good Bye','To','Your','Class'];
		for(let i=0; i<divs.length; i++){
			divs[i].textContent = newVal[i];
		}
	});
});