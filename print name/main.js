const nameInput = document.getElementById("input-name");
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
}

