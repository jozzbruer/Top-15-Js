const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value') 

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList

        if (style.contains('decrease'))
            count--
        else if (style.contains('increase'))
            count++
        else 
            count = 0

        if (count < 0)
            value.style.color = 'red'
        else if (count > 0)
            value.style.color = 'green'
        else
            value.style.color = '#102A42'

        value.textContent = count
    })
});