const func = document.querySelector(".botao")


func.addEventListener("click",()=>{
    const drop = document.querySelector(".dropdown")
    drop.classList.toggle("fade")
})

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Tema Claro' : 'Tema Escuro';
    });

