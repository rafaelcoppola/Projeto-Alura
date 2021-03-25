function calcular () {
    //variavel q vai pegar o conteudo do input
    var miles = document.getElementById ('value')
    //vai transformar em decimal
    var milesN = parseFloat (miles.value)
    //pegar o numero em decimal e dividir po 0.62137
    var res = milesN / 0.62137
    //adicionar uma casa só depois da virgula
    var kmDecimal = res.toFixed(1)
    resultado.innerHTML = `A distancia é ${kmDecimal} Km`
}