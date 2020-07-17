const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']


btn.addEventListener('click', () => {
    //  Get a random number insid the array
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}