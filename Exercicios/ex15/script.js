function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if ( idade < 21) {
                img.setAttribute('src', 'homemjovem.jpg')
            } else if ( idade < 50) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('sr', 'idoso.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'menina.jpg')
            } else if ( idade < 21) {
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if ( idade < 50) {
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        img.style.borderRadius = '100px'
        img.style.maxWidth= '150px'
        img.style.maxHeight = '150px'
        img.style.textAlign = 'center'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}