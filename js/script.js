const percBtns = [...document.querySelectorAll('.percentage-btn')]
percBtns.push(document.getElementById('custom-input'))
console.log(percBtns);

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