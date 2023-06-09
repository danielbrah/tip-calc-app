const percBtns = [...document.querySelectorAll('.percentage-btn'), document.getElementById('custom-input')]
const tip = document.getElementById('tip')
const total = document.getElementById('total')

percBtns.forEach(element => {
    element.addEventListener('click', () =>{
        const checkBtns = percBtns.filter(element => element.classList.contains('active'))

        if(element.classList.contains('active')) return
        else
        {
            if(checkBtns.length == 0) element.classList.add('active')
            else
            {
                checkBtns[0].classList.remove('active')
                element.classList.add('active')
            }
        }
    })
})