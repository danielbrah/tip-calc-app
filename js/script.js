const percBtns = [...document.querySelectorAll('.percentage-btn'), document.getElementById('custom-input')]
const tip = document.getElementById('tip')
const total = document.getElementById('total')
const person = document.getElementById('input-person')
const bill = document.getElementById('input-bill')
const percInput = document.getElementById('custom-input')
const resetBtn = document.getElementById('reset')
// const allInputFields = [...document.querySelectorAll('input')].filter(input => input.classList.contains('active'))

const errorCheck = function() 
{
    // checks if any of the % buttons are active
    const percBtnCheck = Boolean(percBtns.find(element => element.classList.contains('active')));
    const activeBtn = percBtns.filter(btn => btn.classList.contains('active'))
    const totalPerson = validateInput(person)

    if(Boolean(validateInput(bill)) === false || Boolean(percBtnCheck) === false || Boolean(totalPerson) === false){
        setElContent()
        return
    }
    else{
        calcTotal(activeBtn, totalPerson)
    }
}

const setElContent = function(tip = '0.00', total = '0.00')
{
    this.tip.textContent = `${tip}`
    this.total.textContent = `${total}`
}

const reset = function(){
    setElContent()
    person.value = ''
    bill.value = ''
    percInput.value = ''
    percBtns.map(btn => btn.classList.remove('active'))
}

const calcTotal = function(activeBtn = undefined, totalPerson = undefined){
    const tip = activeBtn[0].tagName !== 'DIV' ? validateInput(activeBtn[0]) : Number(activeBtn[0].dataset.perc)
    const totalTipPerPerson = ((validateInput(bill) * tip / 100) / totalPerson).toFixed(2)
    const totalBillPerPerson = ((validateInput(bill) / totalPerson) + Number(totalTipPerPerson)).toFixed(2)

    setElContent(totalTipPerPerson, totalBillPerPerson)
}

const validateInput = function(input = undefined){
    return Number(input.value.replace(' ', '').trim()) 
}

percBtns.forEach(element => {
    element.addEventListener('click', () =>{
        if(element.classList.contains('active')) return
        else
        {
           percBtns.map(element => element.classList.remove('active'))
           element.classList.add('active')
        }

        errorCheck()
    })
})

document.addEventListener('input', () => setTimeout(errorCheck))

resetBtn.addEventListener('click', reset)

// NEXT UP: ADD HOVER EVENTS FOR INPUT FIELDS AND USE ERROR CHECKING FOR THESE FIELDS 
// (WHENEVER THE FIELD IS EMPTY, AN ERROR SHOULD POPUP!)
// REWRITE TIME!?