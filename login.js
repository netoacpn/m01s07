const form = document.getElementById("formLogin")
form.addEventListener("submit", (event) => validarLogin(event))

function validarLogin(e){
        
    e.preventDefault();
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")
    
    const usuarios = JSON.parse(dadosUsuarios)
    
    const [usuarioEncontrado] = usuarios.filter(usuario => usuario.email == email.value)
  
    if(!usuarioEncontrado){
      alert("Email não cadastrado!")
      return
    }
    if(usuarioEncontrado.senha != senha.value){
      alert("Senha inválida!")
      return
    }
    
    localStorage.setItem("dados_usuario", JSON.stringify({nome: usuarioEncontrado.nome, email: usuarioEncontrado.email}))
    
    location.href = "index.html"         
    
}
  