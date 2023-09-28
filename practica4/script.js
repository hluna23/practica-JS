function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){         
       
    }else{
        var n = Number(num.value) 
        var c = 1 
        tab.innerHTML= ""
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
            c++
        } 
        // for (c = 0; c <= 12; c ++) {
        //  saltab.innerHTML   += `${num}  x ${c} = ${num * c} <br>`
        // }
    }
}

 