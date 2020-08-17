const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const article = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
        //  remove active form all buttons
        btns.forEach(btn => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        //  hide other article

        article.forEach(art => {
            art.classList.remove('active')
        })
        const element = document.getElementById(id)

        element.classList.add('active')
    }
})