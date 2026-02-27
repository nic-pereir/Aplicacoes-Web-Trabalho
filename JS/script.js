const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const form = document.querySelector("#form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const erroNome = name.closest(".input-container").querySelector(".error")
const erroEmail = email.closest(".input-container").querySelector(".error")
const erroAssunto = assunto.closest(".input-container").querySelector(".error")
const erroMensagem = mensagem.closest(".input-container").querySelector(".error")
const validation = document.querySelector(".validated")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
    })
})

menuToggle.addEventListener("click", function (){
    navList.classList.toggle("active");
})

form.addEventListener("submit", function (event){
    event.preventDefault()              // Impede o comportamento padrão do navegador
    erroNome.textContent = ""           // Limpa os dados do form após o submit
    erroEmail.textContent = ""
    erroAssunto.textContent = ""
    erroMensagem.textContent = ""
    validation.textContent = ""

    const nomeValor = name.value.trim()
    const emailValor = email.value.trim()
    const assuntoValor = assunto.value.trim()
    const mensagemValor = mensagem.value.trim()
    const positionFirst = emailValor.indexOf("@")
    const positionSecond = emailValor.indexOf(".")
    let isValid = true

    if (nomeValor === ""){                  // Valida se o nome está preenchido
        console.log("Nome obrigatório")
        erroNome.textContent = "Nome obrigatório."
        isValid = false
    }
    if (emailValor === ""){                 // Valida se o email está preenchido
        console.log("Email obrigatório")
            erroEmail.textContent = "Email obrigatório."
        isValid = false
    } else if (!emailValor.includes("@")){  // Valida se o email tem @
        console.log("Email inválido")
        erroEmail.textContent = "Email inválido."
        isValid = false
    } else if (!emailValor.includes(".")){  // Valida se o email tem ponto final
        console.log("Email inválido")
        erroEmail.textContent = "Email inválido."
        isValid = false
    } else if (positionSecond < positionFirst){ // Valida se as posições estão corretas
        console.log("Email inválido")
        erroEmail.textContent = "Email inválido."
        isValid = false
    }
    if (assuntoValor === ""){                   // Valida se o assunto está preenchido
        console.log("Assunto obrigatório")
        erroAssunto.textContent = "Assunto obrigatório."
        isValid = false
    }
    if (mensagemValor === ""){                   // Valida se a mensagem está preenchida
        console.log("Mensagem obrigatória")
        erroMensagem.textContent = "Mensagem obrigatória."
        isValid = false
    }
    if (isValid){                  // Se tudo estiver correto, o formulário é "enviado"
    name.value = ""
    email.value = ""
    assunto.value = ""
    mensagem.value = ""
    validation.textContent = "Formulário enviado com sucesso!"
}
})