function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('txtano')
var res = document.querySelector('div#res')

if(fAno.value.length == 0 || fAno.value > ano){
    window.alert('Verifique los dados e tente Novamente!')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fAno.value
    // res.innerHTML = `Calculamos su ${idade}`
    var Genero = " "
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        Genero = "Homem"
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src', 'criança home.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovem home.png')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'adulto home.png')
        }else{
            //idoso
            img.setAttribute('src', 'idoso home.png')
        }
    }else if (fsex[1].checked){
        Genero = "Mulher"
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src', 'criança mulher.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovem mulher.png')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'mulher adulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'idosa mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${Genero} com ${idade} anos`
    res.appendChild(img)
    }
}