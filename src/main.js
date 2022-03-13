/*
Ao clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

Para isso vamos precisar trabalhar com dois elementos

1 - listagem
2 - cartão do pokémon
*/

// Para começar, é necessário criar duas variáveis pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// Um evento de clique feito pelo usuário na listagem de pokémons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        // remove a classe "aberto" do ultimo cartão em display
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // pegamos o id do pokemon clicado na listagem
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        // adiciona a classe "aberto" para colocar em display o cartao Pokémon selecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remove a classe "ativo" do ultimo pokemon da listagem em display
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adiciona a classe "ativo" para colocar em destaque o Pokémon selecionado na listagem
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
