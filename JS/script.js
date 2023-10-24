let inputBill = document.querySelector('input[data-type="bill"]');
let inputPeople = document.querySelector('input[data-type="people"]');
let inputCustom = document.querySelector('input[data-type="custom"]');
const tipBtn = document.querySelectorAll('button[data-type="tip"]')
const tipTotal = document.querySelector('span[data-type="tip-total"]')
const total = document.querySelector('span[data-type="total"]')
const errMsg = document.querySelectorAll('span[data-type="err"]')
const btn = document.querySelector('button[data-type="submit"]')
const tipArray = Array.from(tipBtn)
const errArray = Array.from(errMsg)

function bill(billValue, peopleValue){
 let checkBill;
 let checkPerson;

 tipArray.forEach((tip) => {
  tip.style.pointerEvents = 'auto'
  tip.addEventListener('click', () => {
    
    checkBill = ((tip.value / 100) * billValue) / peopleValue;
    checkPerson = (billValue / peopleValue) + checkBill

    tipTotal.innerHTML = `$${checkBill.toFixed(2)}`;
    total.innerHTML = `$${checkPerson.toFixed(2)}`
    btn.classList.remove('disabled')
    btn.style.pointerEvents = 'auto'
  })

    btn.addEventListener('click', () => {
      tipTotal.innerHTML = '$0.00'
      total.innerHTML = '$0.00'
      inputBill.value = ''
      inputPeople.value = ''
      tip.classList.remove('active')
      btn.classList.add('disabled')
      btn.style.pointerEvents = 'none'
      inputCustom.value = ''
      tip.style.pointerEvents = 'none'
    })
  
    inputCustom.style.pointerEvents = 'auto'
    inputCustom.addEventListener('input', () => {
    let checkBillCust = ((inputCustom.value / 100) * billValue) / peopleValue;
    let checkPersonCust = (billValue / peopleValue) + checkBillCust

    tip.classList.remove('active')
    tipTotal.innerHTML = '$0.00'
    total.innerHTML = '$0.00'
    tipTotal.innerHTML = `$${checkBillCust.toFixed(2)}`;
    total.innerHTML = `$${checkPersonCust.toFixed(2)}`;
    btn.classList.remove('disabled')
    btn.style.pointerEvents = 'auto'
    })
 })
}

let inputArray = [inputBill, inputPeople]
const regex2 = /^\d+$/;
const regex = '^[0-9]{1,3}([,.][0-9]{1,2})?$';

inputArray.forEach((input) => {
  input.addEventListener('input', () => {
    if(input.value === ''){
      input.previousElementSibling.style.opacity = '1'
      input.style.borderColor = 'red'
    } else {
      input.previousElementSibling.style.opacity = 0
      input.style.borderColor = ''
    }

    if(inputBill.value.match(regex) && inputPeople.value.match(regex2)){
      checkNumber = inputBill.value;
      billValue = checkNumber.replace(/,/g, '.')
      billValue = Number(billValue)
      
      peopleValue = Number(inputPeople.value);
      bill(billValue, peopleValue)
    }
  })
})