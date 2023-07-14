// Ex5 - [pagina-contato] Adicionar Assuntos no Formulário de Contato
// Na página de contato, adicione um dropdown de assuntos dinamicamente utilizando JavaScript. Os assuntos devem ser adicionados como opções no dropdown.

var mainContactElement = document.getElementById('mainContact')

function addSection(){
    var sectionContactElement = document.createElement("section")
    sectionContactElement.setAttribute("style", "margin-top: 50px;")
    mainContactElement.appendChild(sectionContactElement)
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

{/* <main>
<form style="margin: 150px">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Nome Completo</label>
        <input type="name" class="form-control" id="inputEmail4" placeholder="Nome Completo">
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Telefone</label>
        <input type="tel" class="form-control" id="inputEmail4" placeholder="(DDD) X XXXX-XXXX">
      </div>              
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Endereço</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Rua, número, bairro, CEP, Município (UF)">            
    </div>
    <select class="form-control">
        <option value="">Escolha</option>
        <option value="elogio">Elogio</option>
        <option value="reclamacao">Reclamação</option>
        <option value="orcamento">Orçamento</option>
        <option value="pagamento">Pagamento</option>
        <option value="troca">Troca</option>
        <option value="devolucao">Devolução</option>
    </select>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Descreva o motivo de seu contato.</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="..."></textarea>
      </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
            <p>Confirmo meus dados</p>                                  
        </label>
      </div>
    </div>                
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</main> */}