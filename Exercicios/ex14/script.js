function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds ()
setInterval(carregar, 1000);

msg.innerHTML = `Agora são ${hora}horas e ${min} minutos e ${seg}.`
if (hora >= 0 && hora < 12) {
    img.src='Sem título.png'
    document.body.style.background = '#e2cd9f'
} else if( hora > 12 && hora < 18) {
    img.src='tarde.png'
    document.body.style.background = '#b9846f'
} else {
    img.src= 'noite.png'
    document.body.style.background = '#515154'
}


}