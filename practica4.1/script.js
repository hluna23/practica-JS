var number = document.getElementById('txtn')
var seltab = document.getElementById('seltab')

function tabuada(){

    if(number.value.length == 0){
        window.alert('por favor digite un numero')
    }else{  
        var n = Number(number.value)
        seltab.innerHTML= ""
        for(let tm = 0; tm <= 10; tm ++){
            let item = document.createElement('option')
            item.text = `${n} X ${tm} = ${n*tm}`
            item.value = `sel   tab${tm}`
            seltab.appendChild(item)
            // seltab.innerHTML += `${n} x ${tm} ${n*tm}`

            
        } 
    }
}