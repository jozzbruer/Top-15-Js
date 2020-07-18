const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')


navToggle.addEventListener('click', () => {
    const link = links.classList.contains('show-links')

    if (link)
        links.classList.remove('show-links')
    else
        links.classList.add('show-links')
})