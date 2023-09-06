const percBtns = [...document.querySelectorAll('.percentage-btn'), document.getElementById('custom-input')]
const tip = document.getElementById('tip')
const total = document.getElementById('total')
const person = document.getElementById('input-person')
const bill = document.getElementById('input-bill')
const percInput = document.getElementById('custom-input')

const calcTotal = function(){
    const percBtnCheck = percBtns.every(element => element.classList.contains('active'));

    if(!Boolean(validateInput(bill) || !Boolean(percBtnCheck) || !Boolean(validateInput(person)))) return
    else
    {

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

        calcTotal()
    })
})

document.addEventListener('keydown', () => {
    if(percInput.classList.contains('active')) setTimeout(() => console.log(Boolean(validateInput(percInput))))
})