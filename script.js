const convertButton = document.querySelector(".convert-button") 
const dolarDia = 5.14
const euroDia = 5.56
const btcDia = 316392.37
const libraDia = 6.46
const real = 1
const moedaAconverter = document.querySelector(".moeda-a-converter")
const valorInicial = document.querySelector(".valor-inicial")
const valorDigitado = document.querySelector(".valor-a-converter")
const reset = document.querySelector(".reset-button")




function convertvalues(){const valor = document.querySelector(".valor").value

const convertvalue = valor / dolarDia
const convertEuro = valor / euroDia
const convertBtc = valor / btcDia
const convertLibra = valor / libraDia

const valorConvertido = document.querySelector(".valor-convertido")

valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR",{style: "currency",
currency:"BRL"}).format(valor)
if (moedaAconverter.value == "dolar"){valorConvertido.innerHTML = new Intl.NumberFormat("en-US",{style: "currency",currency:"USD"}).format(convertvalue)}
if(moedaAconverter.value == "euro"){valorConvertido.innerHTML = new Intl.NumberFormat("en-UE",{style: "currency",currency:"EUR"}).format(convertEuro)}
if (moedaAconverter.value == "btc"){valorConvertido.innerHTML = new Intl.NumberFormat("en-US",{style: "currency",currency:"BTC"}).format(convertBtc)}
if (moedaAconverter.value == "libra"){valorConvertido.innerHTML = new Intl.NumberFormat("en-US",{style: "currency",currency:"GBP"}).format(convertLibra)}

// pode usar (convertvalue .toFixed(2))

}
function trocaValor(){
    const nomeDolar = document.querySelector(".nome-valor")
    const imgDolar = document.querySelector(".img-dolar")
    if(moedaAconverter.value == "dolar"){
        nomeDolar.innerHTML = "US$ dólar"
        imgDolar.src="./assets/estados-unidos (1) 1.png"}
    if(moedaAconverter.value == "euro"){nomeDolar.innerHTML = "€ euro"
        imgDolar.src="./assets/Design sem nome 3.png"}

    if(moedaAconverter.value == "btc"){nomeDolar.innerHTML = "BTC-bitcoin"
        imgDolar.src="./assets/new-btc.png"}
    
    if(moedaAconverter.value == "libra"){nomeDolar.innerHTML = "£-libra"
        imgDolar.src="./assets/libra 1.png"}

        convertvalues()
    
}
function valorInit(){
    const valorIni = document.querySelector(".valor-a-converter")
    const realText = document.querySelector(".real-text")
    const realImg = document.querySelector(".real-img")
    const realReal = real
    const euroDola = euroDia / dolarDia
    const euroReal = euroDia / real
    const btcDola = btcDia / dolarDia
    const btcReal = btcDia / real

    if(valorInicial.value == "US$"){valorIni.innerHTML ="US$ 0.00"}
    if(valorInicial.value == "€"){valorIni.innerHTML ="€ 0.00"}
    if(valorInicial.value == "BTC"){valorIni.innerHTML ="BTC 0.00"}
    if(valorInicial.value == "£"){valorIni.innerHTML ="£ 0.00"}
    if(valorInicial.value == "R$"){valorIni.innerHTML="R$ 0.00"}

    if(valorInicial.value == "R$"){realImg.src="./assets/brasil 2.png"}
    if(valorInicial.value == "R$"){realText.innerHTML="RS real"}
    if(valorInicial.value == "US$"){realImg.src="./assets/estados-unidos (1) 1.png"}
    if(valorInicial.value == "US$"){realText.innerHTML="US$ dolar"}
    if(valorInicial.value == "€"){realImg.src="./assets/Design sem nome 3.png"}
    if(valorInicial.value == "€"){realText.innerHTML="€ euro"}
    
    if(valorInicial.value == "BTC"){realImg.src="./assets/new-btc.png"}
    if(valorInicial.value == "BTC"){realText.innerHTML="BTC bitcoin"}

    if(valorInicial.value == "£"){realImg.src="./assets/libra 1.png"}
    if(valorInicial.value == "£"){realText.innerHTML= "£ libra"}
}

function btnReset(){
    location.reload()
}

valorInicial.addEventListener("change",valorInit)
convertButton.addEventListener("click",convertvalues)
moedaAconverter.addEventListener("change",trocaValor)
reset.addEventListener("click",btnReset)

const valorInput = document.querySelector(".valor");
valorInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    convertvalues();}})

