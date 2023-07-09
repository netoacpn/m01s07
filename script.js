// Ex1 - [header] Adicionar Informações do Header
// Em JavaScript que selecione o elemento do header. Em seguida, adicione dinamicamente as informações do header
// (Informações da logo e opções de menu)
// // Sugestão: Crie um objeto em Javascript com informações da logo e uma lista de opções de menu.

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

    // var buttonNav = document.createElement('button')
    // buttonNav.classList.add("navbar-toggler")
    // buttonNav.type = "button"
    // buttonNav.setAttribute("data-toggle", "colapse")
    // buttonNav.setAttribute("data-target", "#navbarSupportedContent")
    // buttonNav.setAttribute("aria-controls", "navbarSupportedContent")
    // buttonNav.setAttribute("aria-expanded", "false")
    // buttonNav.setAttribute("aria-label", "Toggle navigation")
    // navHeaderElement.appendChild(buttonNav)

    // var navSpan = document.createElement("span")
    // navSpan.classList.add("navbar-toggler-icon")

    // buttonNav.appendChild(navSpan)

    var divNav = document.createElement("div")
    // divNav.classList.add("collapse", "navbar-collapse")
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
}
addInfoNav()


// Ex2 - [pagina-todos-medicamentos] Adicionar Lista de medicamentos
// Na página de todos os medicamentos, crie uma lista de medicamentos utilizando JavaScript para criar elementos do DOM dinamicamente. Os medicamentos devem ser exibidos em cards, contendo título, imagem, valor e um botão de adicionar ao carrinho.
// Sugestão: Crie uma lista de objetos  em Javascript com informações de cada card

// Ex3 - [pagina-todos-medicamentos] Adicionar evento para adicionar medicamento
// Capture o evento de clique no botão de adicionar um medicamento e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado ao carrinho.

// Ex4 - [pagina-todos-medicamentos] Adicionar evento para favoritar medicamento
// Capture o evento de clique no botão de favoritar um produto e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos favoritados no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado aos favoritos.

// Ex5 - [pagina-contato] Adicionar Assuntos no Formulário de Contato
// Na página de contato, adicione um dropdown de assuntos dinamicamente utilizando JavaScript. Os assuntos devem ser adicionados como opções no dropdown.

// Ex6 - [pagina-contato] Adicionar Evento de envio de Formulário de Contato
// Capture o evento de envio do formulário de contato e, ao ser enviado, exiba um log com o nome da pessoa que enviou a mensagem utilizando JavaScript. Além disso, mostre um alerta informando que a mensagem foi enviada com sucesso.

// Ex7 - [Header] Adicionar Dark Mode
// Crie um botão no cabeçalho da página e adicione um evento de clique utilizando JavaScript. Esse botão será responsável por ativar o modo escuro, modificando as propriedades e estilos do DOM para exibir uma versão escura do site.
