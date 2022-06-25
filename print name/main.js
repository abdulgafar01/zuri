const nameInput = document.getElementById("input-name");
const heightInput = document.getElementById("input-height");
const countryInput = document.getElementById("input-country");
const printbtn = document.querySelector("button");
const container = document.querySelector('.print-name');


loadevent()

function loadevent(){
  printbtn.addEventListener('click', yourname)

}
function yourname(){
  if (nameInput.value === ''){
    alert("Enter your name")
  }
  else{

    const yourName = document.createElement('div')
    yourName.className = 'myName'
    yourName.appendChild(document.createTextNode(
      `Your name is ${nameInput.value}`))
    container.appendChild(yourName) 
     
   
    nameInput.value = '';
    
  }
  if (heightInput.value === ''){
    alert("Enter your height")
  }
  else{

    const yourName = document.createElement('div')
    yourName.className = 'myName'
    yourName.appendChild(document.createTextNode(
      `Your height is ${heightInput.value} meters`))
    container.appendChild(yourName) 
     
   
    heightInput.value = '';
    
  }
  if (countryInput.value === ''){
    alert("Enter your country")
  }
  else{

    const yourName = document.createElement('div')
    yourName.className = 'myName'
    yourName.appendChild(document.createTextNode(
      `Your country is ${countryInput.value}`))
    container.appendChild(yourName) 
     
   
    countryInput.value = '';
    
  }
}

