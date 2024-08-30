const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A formação tática de um time pode impactar seu desempenho?",
        alternativas: [
            {
                texto: "A formação 4-4-2 é conhecida por equilibrar defesa e ataque, com quatro defensores, quatro meio-campistas e dois atacantes.",
                afirmacao: "A formação 4-4-2 proporciona um bom equilíbrio entre defesa e ataque."
            },
            {
                texto: " Esse esquema tático ajuda a manter um equilíbrio entre defesa e ataque.",
                afirmacao: " A formação 4-4-2 é ideal para times que precisam de cobertura defensiva e capacidade de ataque."
            }
        ]
    },
    {
        enunciado: "A história e as rivalidades entre clubes são aspectos importantes no futebol?",
        alternativas: [
            {
                texto: " O FC Barcelona, fundado em 1899, é um dos clubes mais famosos do mundo."
.",
                afirmacao: "O FC Barcelona é famoso pela sua rivalidade com o Real Madrid."
            },
            {
                texto: "O clube é conhecido pela sua rivalidade intensa com o Real Madrid.",
                afirmacao: "O Barcelona é um dos clubes mais renomados e antigos do futebol mundial."
            }
        ]
    },
    {
        enunciado: "Jogadores lendários são frequentemente lembrados por suas conquistas e habilidades?",
        alternativas: [
            {
                texto: "Pelé conquistou três Copas do Mundo com o Brasil (1958, 1962, 1970).",
                afirmacao: "Pelé é conhecido por suas três conquistas de Copa do Mundo."
            },
            {
                texto: "Sua habilidade técnica e capacidade de marcar gols o tornaram uma lenda do esporte.",
                afirmacao: "A habilidade técnica de Pelé o estabeleceu como um ícone global do futebol."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}
mostraPergunta();
    
  

