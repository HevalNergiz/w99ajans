const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navcol-1')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})