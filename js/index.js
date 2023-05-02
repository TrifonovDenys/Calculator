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
  listEL.classList.add('list')
  const btmItems = arr.map(({ btnText }) => `<li class="item"><button class="calc_btn">${btnText}</button></li>`).join('')
  listEL.insertAdjacentHTML('beforeend', btmItems)
  return listEL  
}

body.append(createButtons(symbols))
 
// function createInputs() {
  const inputData = document.createElement('input')
  console.log(inputData);
  body.prepend(inputData)
  inputData.placeholder = '0'
// }

listEL.addEventListener('click', vue)

function vue(e) {
  console.log(e.target.textContent);
  if('1234567890'.includes(e.target.textContent)){
    inputData.value = inputData.value + +e.target.textContent
    console.log(inputData);
  }

  if (e.target.textContent === 'CE' || e.target.textContent === 'C') clear()
  if (e.target.textContent === '1/x') drob()
  if (e.target.textContent === 'x^2') sqr()
  if (e.target.textContent === 'x^1/2') sqrt()
  if (e.target.textContent === '+/-') changeznak()
  if (e.target.textContent === 'X') removeSymbol()
  if (e.target.textContent === '.') adddot()
  if (e.target.textContent === '=') result()
    
    if('/+-*'.includes(e.target.textContent)){
    inputData.value = inputData.value + e.target.textContent
    console.log(inputData);
  }
}


function clear() {
  inputData.value = ''
}

function drob() {
  inputData.value = 1/inputData.value
}

function sqr() {
  inputData.value = inputData.value ** 2
}

function sqrt() {
  inputData.value = inputData.value ** (1/2)
}

function changeznak() {
  inputData.value = -inputData.value
}

function removeSymbol() {
  let a = `${inputData.value}`.split('')
  a.pop()
  if(a.length === 0){
    inputData.value = ''
    return
  }
  inputData.value = +a.join('')
}

function adddot() {
  if (inputData.value.includes('.')) return
  if (inputData.value === '') return inputData.value = 0 + '.'
  if (inputData.value !== '') inputData.value += '.'
}

function result() {
  inputData.value = eval(inputData.value)
}