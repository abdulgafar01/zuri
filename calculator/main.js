let myoutput = document.getElementById("output");

display = num => myoutput.value !== "0" ? myoutput.value += num : myoutput.value  = num; 
Clear = () => myoutput.value = "0" ;
del = () => myoutput.value = myoutput.value.slice(0,-1);
equate = () => myoutput.value = eval(myoutput.value);
percent = () => myoutput.value *= 0.01 ;
