var header = document.querySelector('header')

function criarNavHeader(){
    var navHeader = document.createElement("nav")
    navHeader.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-primary")
    header.appendChild(navHeader)
}
criarNavHeader()

var navHeaderElement = document.querySelector('nav')

function addInfoNav(){
    var navBrand = document.createElement("a")
    navBrand.classList.add("navbar-brand")
    navBrand.href = "index.html"
    navBrand.innerText = "DevFarma"
    navHeaderElement.appendChild(navBrand)

    var divNav = document.createElement("div")    
    divNav.setAttribute("id", "navbarSupportedContent")
    navHeaderElement.appendChild(divNav)

    var ulNav = document.createElement("ul")
    ulNav.classList.add("navbar-nav", "mr-auto")
    divNav.appendChild(ulNav)

    var liPagInicial = document.createElement("li")
    liPagInicial.classList.add("nav-item")
    ulNav.appendChild(liPagInicial)
    
    var aLiPagInicial = document.createElement("a")
    aLiPagInicial.classList.add("nav-link")
    aLiPagInicial.href = "index.html"
    aLiPagInicial.innerText = "Página Inicial"
    liPagInicial.appendChild(aLiPagInicial)

    var spanLiPagInicial = document.createElement("span")
    spanLiPagInicial.classList.add("sr-only")
    liPagInicial.appendChild(spanLiPagInicial)

    var liSobre = document.createElement("li")
    liSobre.classList.add("nav-item")
    ulNav.appendChild(liSobre)
    
    var aLiSobre = document.createElement("a")
    aLiSobre.classList.add("nav-link")
    aLiSobre.href = "index.html"
    aLiSobre.innerText = "Sobre nós"
    liSobre.appendChild(aLiSobre)

    var spanLiSobre = document.createElement("span")
    spanLiSobre.classList.add("sr-only")
    liSobre.appendChild(spanLiSobre)

    var liContato = document.createElement("li")
    liContato.classList.add("nav-item")
    ulNav.appendChild(liContato)
    
    var aLiContato = document.createElement("a")
    aLiContato.classList.add("nav-link")
    aLiContato.href = "contact.html"
    aLiContato.innerText = "Contato"
    liContato.appendChild(aLiContato)

    var spanLiContato = document.createElement("span")
    spanLiContato.classList.add("sr-only")
    liContato.appendChild(spanLiContato)

    var buttonDarkMode = document.createElement("button")
    buttonDarkMode.classList.add("btn", "btn-outline-light", "my-2", "my-sm-0")
    buttonDarkMode.setAttribute("type", "submit")
    buttonDarkMode.setAttribute("style", "margin-left: auto")
    buttonDarkMode.id = "darkMode"
    buttonDarkMode.innerText = "Modo Escuro"
    navHeaderElement.appendChild(buttonDarkMode)
}
addInfoNav()

// Dark Mode

var buttonDarkMode = document.getElementById('darkMode')

var bodyElement = document.getElementById('body')

var button = document.getElementById('submitBtn')

buttonDarkMode.addEventListener("click", verificarTema)

function verificarTema(){

  navHeaderElement.classList.toggle("bg-primary")  
  navHeaderElement.classList.toggle("bg-dark")
  
  buttonDarkMode.classList.toggle("btn-primary")
  buttonDarkMode.classList.toggle("btn-dark")
  
  bodyElement.classList.toggle("bg-light")
  bodyElement.classList.toggle("bg-secondary")

  button.classList.toggle("btn-primary")
  button.classList.toggle("btn-dark")
}