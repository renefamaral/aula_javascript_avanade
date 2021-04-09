// duas barras para comentário em JavaScript
/** comentário de múltiplas linhas */

//var nome = "Rene Amaral";
//var idade = 30;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem-vindo " + nome + ", você tem " + idade + " anos.");
//alert(idade + idade2)
//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();
//var  fruta = {nome:"Maçã", cor:"vermelha" } //criando dicionário.
//var  frutas = [{nome:"Maçã", cor:"vermelha" }, {nome:"Uva", cor:"verde" }] //lista de dicionários
//var idade = 18; // exemplo com condicionais

/*
var idade = prompt("Qual a sua idade?") //comando prompt para abrir uma caixa de resposta, no caso perguntando sobre a idade
if(idade <= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};
*/

/*
var count = 0; // exemplo de estrutura de repetição.
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*
var count; // estrutura de repetição
for (count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getMonth()+1); // por regra o mês inicia em 0, sempre acrescentar +1.
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getDate());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var validar;
function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
function clicou(){
    alert("Obrigado por clicar");
}
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); // abre numa nova janela.
    window.location.href = "https://digitalinnovation.one/"; // abre na mesma aba.
}

function trocar(elemento){ // trocando o texto com o passar do mouse
    //document.getElementById("mousemouve").innerHTML = "Você mudou o texto."; // altera o texto com base no id.
    elemento.innerHTML = "Você mudou o texto." // usar o elemento para tratar cada texto de forma individual.
    //alert("Trocar texto")
}

function voltar(elemento){ // voltando o texto com o passar do mouse
    //document.getElementById("mousemouve").innerHTML = "Passe o mouse aqui."; // altera o texto com base no id.
    elemento.innerHTML = "Passe o mouse aqui." // usar o elemento para tratar cada texto de forma individual.
}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){ 
    console.log(elemento.value); //captura o valor do elemento
}



//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));// usando o replace para trocar uma palavra pela outra. 
//console.log(frase.toUpperCase()); // tudo maiúsculo com toUpperCase.
//console.log(frase.replace("Japão", "Chile").toLowerCase())//usando replace e toLowerCase juntos.
//alert(frase.replace("Japão", "Argentina")); // usando replace no alert.
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); // transforma em string mas permite alterar a forma de exibição.
//console.log(lista.length); //tamanho do array.
//console.log(lista.reverse()); // imprimindo a lista no sentido reverso.
//alert(lista[1]);
//console.log(fruta); //imprimindo dicionário
//console.log(fruta.nome); // imprimindo o nome da fruta
//console.log(fruta.cor); //imprimindo a cor da fruta
//console.log(frutas);
//alert(frutas[1].nome);

