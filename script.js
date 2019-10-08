function counting() {
  var initial = document.getElementById('initialNumber').value
  var final = document.getElementById('finalNumber').value
  var range = document.getElementById('rangeNumber').value

  var initial = Number(initial)
  var final = Number(final)
  var range = Number(range)
  var resultOutput = document.getElementById('result')
  resultOutput.innerHTML = 'Contando...<br>'
  
  if (range <= 0){
    //admitindo range 1 caso range 0 ou negativo
    alert('Nao tem como contar de 0 admitindo passo 1')
    range = 1
  }

  else if (range > final) {
  alert('Erro passo maior que o final')
  }

  if (initial < final){
      //Contagem crescente
      while(initial <= final){
        resultOutput.innerText = resultOutput.innerText + ` ${String(initial)}`
        var initial = initial + range
      }
    }

  else if (initial > final){
    //Contagem Regressiva
    while(initial >= final) {
      resultOutput.innerText = resultOutput.innerText + ` ${String(initial)}` 
      var initial = initial - range
    }
  }
  resultOutput.innerText += ` \u{1f620}`
}
    
    
    
    