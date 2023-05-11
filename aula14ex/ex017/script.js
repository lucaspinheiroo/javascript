function tabuada () {
    let inicio = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if ( inicio.value.length == 0 ) {
        
        window.alert ('[Erro], Digite um número válido!')
    } else  {
        let i = Number=(inicio.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } 
    
}