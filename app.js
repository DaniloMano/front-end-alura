function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    if (campoPesquisa == ""){
      section.innerHTML = "<p>Nada Foi Encontrado, Escreva Algo</p>";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      // se o titulo includes campopesquisa:
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada item da pesquisa, formatando os dados do objeto 'dado'
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
        `;
      }
      if (!resultados){
        resultados = "<p>Nada foi encontrado</p>";
      }
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }