const initApp = () =>{
    const hamburgerbtn = document.getElementById('hamburger-button')
    const mobilemenu = document.getElementById('mobile-menu')

    const toggle = () =>{
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle("flex")
    }

    hamburgerbtn.addEventListener('click', toggle)
    mobilemenu.addEventListener('click', toggle)
}
document.addEventListener('DOMContentLoaded',initApp)