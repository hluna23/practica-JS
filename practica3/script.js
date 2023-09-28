function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            // window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){      
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{01f449}`
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{01f449}`
            }
        }

    }
}
