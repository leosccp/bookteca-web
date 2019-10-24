$(function(){
  function carregarLivros() {
    fetch("http://localhost:8080/bookteca-api/src/lerlivros.php").then(function(resposta){
      resposta.json().then(function(json){

        let listagem = $("#listagem")
        for(let i = 0; i < json.length; i++){
          let cardAtual = criarCard(json[i].id, json[i].titulo, json[i].subtitulo, json[i].descricao, "https://picsum.photos/200/300?random=" + i)
          listagem.append(cardAtual)
        }

      })
    })
  }

  carregarLivros();

  function criarCard(id, titulo, subtitulo, descricao, imagem){
    let coluna4 = $("<div></div>")
    coluna4.addClass("col-4")
    coluna4.addClass("md-4")
    coluna4.on('click', function(){
    window.location.href="/livro-detalhes?id=" + id
  })

    let card = $("<div></div>")
    card.addClass("custom-card")
    coluna4.append(card)

    let cardheader = $("<header></header>")
    cardheader.addClass("custom-card-header")
    card.append(cardheader)

    let cardHeaderTitleContainer = $("<div></div>")
    cardHeaderTitleContainer.addClass("custom-card-title-container")

    let cardHeaderTitle = $("<strong></strong>")
    cardHeaderTitle.append(titulo)

    let cardHeaderSubtitle = $("<h6></h6>")
    cardHeaderSubtitle.addClass("custom-card-header-subtitle")
    cardHeaderSubtitle.append(subtitulo)

    cardHeaderTitleContainer.append(cardHeaderTitle)
    cardHeaderTitleContainer.append(cardHeaderSubtitle)
    cardheader.append(cardHeaderTitleContainer)

    let cardHeaderIcon = $("<span></span>")
    cardHeaderIcon.addClass("custom-card-header-icon")
    cardheader.prepend(cardHeaderIcon)

    let cardImg = $("<div></div>")
    cardImg.addClass("custom-card-img")
    cardImg.css("background-image",'url("' + imagem + '")')
    card.append(cardImg)

    return coluna4
  }
})
