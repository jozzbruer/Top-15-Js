const toggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close-btn')

toggle.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar')
})

close.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})