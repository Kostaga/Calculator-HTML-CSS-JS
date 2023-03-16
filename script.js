//global variables
let input = document.getElementById("input");
let symb;
let flag = false;
//function that wipes the screen
const wipe = () => {
	input.value = '';
}
//adds symbol to screen and checks for 0 as the first item
const show = (symbol) => {
	if ((!flag && input.value.charAt(0) !== "0")) {
		input.value += symbol;
		symb = symbol;
	}
	else {
		if (!(['+','*','-','/','0'].includes(symbol))) {
			wipe();
			input.value = symbol;
		}
		else {
			input.value += symbol;
		}

		flag = false;
	}
}
//calculates the expression
const calculate = () => {
	try {
		input.value = eval(input.value);
	} catch (error) {
		input.value = "Error";
	}
	finally {
		flag = true;
	}
	
}
//backspace
const del = () => {
	input.value = input.value.replace(symb,'');
	symb = input.value.charAt(input.value.length-1);
}