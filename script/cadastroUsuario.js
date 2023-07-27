const form = document.getElementById ("formLogin")

form.addEventListener("submit", (event) => cadastroUsuario(event))

function cadastroUsuario () {
    event.preventDefault()

    const nome = document.getElementById("name")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const usuarios = JSON.parse(dadosUsuarios)

    const usuarioEncontrado = usuarios.filter(usuario => {
        return usuario.email == email.value
    })

    if(!!usuarioEncontrado && usuarioEncontrado.length > 0){
        alert("E-mail já cadastrado")
        return
    }

    usuarios.push({
        nome: nome.value,
        email: email.value,
        senha: senha.value
    })

    dadosUsuarios = JSON.stringify(usuarios)
    console.log(dadosUsuarios)
}