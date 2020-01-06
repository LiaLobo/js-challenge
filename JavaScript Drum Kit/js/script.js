const body = document.querySelector('body')

body.addEventListener('keydown', function playAudio(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
    const key = document.querySelector(`.container-box[data-key='${event.keyCode}']`) //selecionar o span aqui servirá para adicionar o efeito quando a tecla for tocada
    

    if(!audio) return //impede que a função toque todos os audios juntos. Checamos se a tecla clicada retorna algum audio, através do data-key
    audio.currentTime = 0 //retorna o audio para o início. Assim conseguimos fazer com que o audio toque toda vez que a tecla for clicada sem delay
    audio.play() //faz com que o audio seja tocado

    key.classList.add('playing')
})

const keys = document.querySelectorAll('.container-box')

keys.forEach(key => key.addEventListener('transitionend', function removeTransition(event) {
    if(event.propertyName !== 'transform') return //pula o que não tiver o nome de propriedade igual a transform 
    this.classList.remove('playing')
})) //percorrer o array feito com as tags span, adicionar um evento de escuta de fim de transição e a função pega cada fim de transição. Isso acontece por causa das transições que foram adicionadas no css (tempo, cor, sombra, bordas...)