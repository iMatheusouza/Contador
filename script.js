function counting() {
  //variáveis que pegarao os valores do usuário
  var initial = document.getElementById('initialNumber').value
  var final = document.getElementById('finalNumber').value
  var range = document.getElementById('rangeNumber').value

//agora convertemos em número
  var initial = Number(initial)
  var final = Number(final)
  var range = Number(range)

//substitumos o texto no site, para os novos numeros que serao gerados
  var resultOutput = document.getElementById('result')
  resultOutput.innerHTML = 'Contando...<br>'
  
//caso o passo seja menor que 0, admitimos passo 1
  if (range <= 0){
    //admitindo range 1 caso range 0 ou negativo
    alert('Nao tem como contar de 0 admitindo passo 1')
    range = 1
  }

//se o passo for maior que o final, nao ha resultado
  else if (range > final) {
  alert('Erro passo maior que o final')
  }

//se o valor inicial for menor que o final, logo contagem crescente
  if (initial < final){
      while(initial <= final){
        resultOutput.innerText = resultOutput.innerText + ` ${String(initial)}`
        var initial = initial + range
      }
    }

//se o inicial for maior que o final, logo contagem decrescente
  else if (initial > final){
    while(initial >= final) {
      resultOutput.innerText = resultOutput.innerText + ` ${String(initial)}` 
      var initial = initial - range
    }
  }

//entao geramos o emoji para sempre aparecer no final
  resultOutput.innerText += ` \u{1f620}`
}
    
    
    
    