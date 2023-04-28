const body = document.body;
const symbols = [
  { btnText: '%' },
  { btnText: 'CE' },
  { btnText: 'C' },
  { btnText: 'X' },
  { btnText: '1/x' },
  { btnText: 'x^2' },
  { btnText: 'x^1/2' },
  { btnText: '/' },
  { btnText: '7' },
  { btnText: '8' },
  { btnText: '9' },
  { btnText: '*' },
  { btnText: '4' },
  { btnText: '5' },
  { btnText: '6' },
  { btnText: '-' },
  { btnText: '1' },
  { btnText: '2' },
  { btnText: '3' },
  { btnText: '+' },
  { btnText: '+/-' },
  { btnText: '0' },
  { btnText: '.' },
  { btnText: '=' },
];
const listEL = document.createElement('ul')
function createButtons(arr) {
  // const listEL = document.createElement('ul')
  listEL.classList.add('list')
  const btmItems = arr.map(({ btnText }) => `<li class="item"><button class="calc_btn">${btnText}</button></li>`).join('')
  listEL.insertAdjacentHTML('beforeend', btmItems)
  return listEL
    
}
body.append(createButtons(symbols))
 
// function createInputs() {
  const inputData = document.createElement('input')
  console.log(inputData);
  body.append(inputData)
inputData.textContent = ''
  inputData.placeholder = '0'
  const listData = document.createElement('label')
// }

listEL.addEventListener('click', vue)

function vue(e) {
  console.log(e.target.textContent);
  if(e.target.nodeName === 'BUTTON' && e.target.textContent != '='){
    inputData.textContent += e.target.textContent
  }

  if (e.target.textContent === '=') {
    inputData.textContent = eval(inputData.textContent)
  }
  if (e.target.textContent === '+/-') {
    inputData.textContent = inputData.textContent
  }
  if (e.target.textContent === 'C') {
    inputData.textContent = ''
  }
}