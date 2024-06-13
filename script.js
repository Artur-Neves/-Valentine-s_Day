
const identificador = document.querySelector("#identificador");
const questoes = document.querySelectorAll(".conteiner-question");
const botaoFujao = document.querySelector("#botao-fujao");
const letraE = document.querySelector("#letraE");
switch (identificador.getInnerHTML()) {
    case "1) ":
            escolherVerdadeira("Atrás da fonte", questoes, 2);
        break;
        case "2) ":
            escolherVerdadeira("08/10", questoes, 3);
        break;
        case "3) ":
            escolherVerdadeira(null, questoes, 4);
        break;
        case "4) ":
            escolherVerdadeira("Cinema", questoes, 5);
        break;
        case "5) ":
        escolherVerdadeira("Amung us", questoes, 6);
        break;
        case "6) ":
            escolherVerdadeira("Meu bem", questoes, 7);
            advinharPorVoz();
        break;
        case "7) ":
        escolherVerdadeira("Sua Casa", questoes, 8);
        break;
        case "8) ":
            escolherVerdadeira("Praça", questoes, 9);
        break;
        case "9) ":
        escolherVerdadeira("Seu pai", questoes, 10);
        break;
        case "10) ":
            escolherVerdadeira("Sim", questoes, 11);
            criarBotaoFujao();
            break;
           

    default:
        break;
}

function questao_correta(campo, question){
    campo.addEventListener("click", ()=>{
        campo.classList.add("verdadeiro");
        setTimeout(() => {
            window.location.href=`./questao0${question}.html`;
        }, 500);
        
    })};
    function questao_errada(campo){
        campo.addEventListener("click", ()=>{
            campo.classList.add("falso");
            setTimeout(() => {
                window.location.href=`./questao01.html`;
            }, 500);
        });
}

function escolherVerdadeira (verdadeiro, questoes, question){

    for (let index = 0; index < questoes.length; index++) {
        const element = questoes[index]; 
       
        if(element.getInnerHTML().includes(verdadeiro)){
            questao_correta(element, question)
        }
        else{
            questao_errada(element)
        }
    };
}

function criarBotaoFujao(){
    botaoFujao.addEventListener("mouseover", ()=>{
        botaoFujao.style.position="absolute";
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;
        const larguraBotao = botaoFujao.offsetWidth;
        const alturaBotao =  botaoFujao.offsetHeight;
        const x = generateRandomNumber( (larguraTela-larguraBotao));
        const y = generateRandomNumber( (alturaTela-alturaBotao));
        console.log(x);
        console.log(y);
        botaoFujao.style.left= `${x}px`;
        botaoFujao.style.top= `${y}px`;
    });
}

function generateRandomNumber( max){ 
    const value = parseInt(Math.random()*max);
    return value
}
function advinharPorVoz(){
   ouvirPalavra("meu bem");
}
 function ouvirPalavra(palavra){
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.start();
    recognition.addEventListener("result", onSpeak);
    
    recognition.addEventListener("end", ()=> recognition.start());
    
    }
    function onSpeak(event) {
        let guess = event.results[0][0].transcript;
        if(guess.includes("meu bem")){
            letraE.style.display="flex"
            
        }
      }