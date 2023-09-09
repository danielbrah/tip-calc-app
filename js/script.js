const percBtns = [...document.querySelectorAll('.percentage-btn'), document.getElementById('custom-input')]
const tip = document.getElementById('tip')
const total = document.getElementById('total')
const person = document.getElementById('input-person')
const bill = document.getElementById('input-bill')
const percInput = document.getElementById('custom-input')

const setElContent = function(tip = '0.00', total = '0.00')
{
    this.tip.textContent = `${tip}`
    this.total.textContent = `${total}`
}

const calcTotal = function(activeBtn){
    const percBtnCheck = Boolean(percBtns.find(element => element.classList.contains('active')));
    const tip = activeBtn[0].tagName !== 'DIV' ? validateInput(activeBtn[0]) : Number(activeBtn[0].dataset.perc)
    const totalPerson = validateInput(person)
    const totalTipPerPerson = ((validateInput(bill) * tip / 100) / totalPerson).toFixed(2)
    const totalBillPerPerson = ((validateInput(bill) / totalPerson) + Number(totalTipPerPerson)).toFixed(2)


    if(Boolean(validateInput(bill)) === false || Boolean(percBtnCheck) === false || Boolean(totalPerson) === false){
        setElContent()
        return
    }
    else
    { 
        setElContent(totalTipPerPerson, totalBillPerPerson)
    }
}

const validateInput = function(input){
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

        calcTotal([...percBtns.filter(btn => btn.classList.contains('active'))])
    })
})

document.addEventListener('keydown', () => {

    setTimeout(() => {
        if(Boolean(percBtns.find(btn => btn.classList.contains('active')))
        ) calcTotal(percBtns.filter(btn => btn.classList.contains('active')))
    })
})