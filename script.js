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

var main = document.querySelector('main')

function addSection(){
    var section = document.createElement("section")
    section.setAttribute("style", "margin-top: 50px;")
    main.appendChild(section)
}
addSection()

var sectionMain = document.querySelector('section')
function addSectionDiv(){
    var divSection = document.createElement("div")
    divSection.classList.add("card-deck")
    divSection.setAttribute("style", "margin: 35px; display: grid; grid-template-columns: repeat(4 ,1fr);")
    sectionMain.appendChild(divSection)
}
addSectionDiv()

var divSection = document.querySelector('.card-deck')
var impCard = 1
function addCardDeck(){
    var divCard = document.createElement("div")
    divCard.classList.add("card", "card"+impCard)
    divCard.setAttribute("style", "margin: 15px")
    divSection.appendChild(divCard)

    divCard.getElementsByClassName(".card"+impCard)
    
    // <button class="btn" type="submit" style="text-align: right "><i class="bi bi-bookmark-heart-fill" style="font-size: 3rem; color: #007bff;"></i></button>
    var favoriteButton = document.createElement("button")
    favoriteButton.classList.add("btn", "favoriteButton")
    favoriteButton.type = "submit"
    favoriteButton.setAttribute("style", "text-align: right")   
    divCard.appendChild(favoriteButton)

    var favoriteIcon = document.createElement("i")
    favoriteIcon.classList.add("bi", "bi-bookmark-heart-fill")
    favoriteIcon.setAttribute("style", "font-size: 3rem; color: #007bff")
    favoriteButton.appendChild(favoriteIcon)

    var cardImg = document.createElement("img")
    cardImg.src = "img/med-gen"+impCard+".jpg"
    cardImg.classList.add("card-img-top")
    cardImg.setAttribute("alt", "Foto caixa do remédio")    
    divCard.appendChild(cardImg)

    var divCardBody = document.createElement('div')
    divCardBody.classList.add("card-body", "card-body"+impCard)
    divCard.appendChild(divCardBody)

    divCardBody.getElementsByClassName(".card-body"+impCard)
    var h4Titulo = document.createElement('h4')
    h4Titulo.classList.add("card-title", "titulo"+impCard)
    h4Titulo.innerText = "Nome do remédio "+impCard
    divCardBody.appendChild(h4Titulo)

    var descricaoRemedio = document.createElement('p')
    descricaoRemedio.classList.add("card-text")
    descricaoRemedio.innerText = "Este é um remédio genérico focado na resolução dos seus problemas de saúde."
    divCardBody.appendChild(descricaoRemedio)

    var h5Preco = document.createElement('h5')
    h5Preco.classList.add("card-price")
    h5Preco.innerText = "R$ 99,99"
    divCardBody.appendChild(h5Preco)

    var botaoCompra = document.createElement('button')
    botaoCompra.classList.add("btn", "btn-primary", "btn-card", "btn"+impCard)
    botaoCompra.type = "submit"
    botaoCompra.innerText = "Adicionar ao Carrinho "
    divCardBody.appendChild(botaoCompra)

    var cardIcon = document.createElement("i")
    cardIcon.classList.add("bi", "bi-cart-plus")
    botaoCompra.appendChild(cardIcon)

    impCard++
}
addCardDeck()
addCardDeck()
addCardDeck()
addCardDeck()
addCardDeck()
addCardDeck()
addCardDeck()
addCardDeck()


// Ex3 - [pagina-todos-medicamentos] Adicionar evento para adicionar medicamento
// Capture o evento de clique no botão de adicionar um medicamento e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado ao carrinho.

function adicionarAoCarrinho() {
    var btnAddCart = document.getElementsByClassName("btn-card")
  
    var btnAddCartArray = Array.from(btnAddCart)

    var listaCarrinhoArray = []
  
    btnAddCartArray.forEach(function(botao, index) {
      botao.addEventListener('click', function() {
        var nomeRemedio = document.querySelector('.titulo' + (index + 1)).innerText      
  
        console.log("Medicamento adicionado ao carrinho:", nomeRemedio)

        listaCarrinhoArray.push(nomeRemedio)
        console.log(listaCarrinhoArray)  

        window.alert(nomeRemedio + " adicionado ao carrinho!")
      })
    })
}
  
adicionarAoCarrinho()

// Ex4 - [pagina-todos-medicamentos] Adicionar evento para favoritar medicamento
// Capture o evento de clique no botão de favoritar um produto e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos favoritados no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado aos favoritos.

function adicionarFavoritos() {
    var btnAddFav = document.getElementsByClassName("favoriteButton")
  
    var btnAddFavArray = Array.from(btnAddFav)

    var listaFavArray = []
  
    btnAddFavArray.forEach(function(botaoFav, index) {
      botaoFav.addEventListener('click', function() {
        var nomeRemedio = document.querySelector('.titulo' + (index + 1)).innerText      
  
        console.log("Medicamento adicionado aos favoritos:", nomeRemedio)

        listaFavArray.push(nomeRemedio)
        console.log(listaFavArray)  
        
        window.alert(nomeRemedio + " adicionado aos favoritos!")
      })
    })
}
  
adicionarFavoritos()

// Ex5 - [pagina-contato] Adicionar Assuntos no Formulário de Contato
// Na página de contato, adicione um dropdown de assuntos dinamicamente utilizando JavaScript. Os assuntos devem ser adicionados como opções no dropdown.

// Ex6 - [pagina-contato] Adicionar Evento de envio de Formulário de Contato
// Capture o evento de envio do formulário de contato e, ao ser enviado, exiba um log com o nome da pessoa que enviou a mensagem utilizando JavaScript. Além disso, mostre um alerta informando que a mensagem foi enviada com sucesso.

// Ex7 - [Header] Adicionar Dark Mode
// Crie um botão no cabeçalho da página e adicione um evento de clique utilizando JavaScript. Esse botão será responsável por ativar o modo escuro, modificando as propriedades e estilos do DOM para exibir uma versão escura do site.
