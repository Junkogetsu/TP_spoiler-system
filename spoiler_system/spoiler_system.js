var elements = document.querySelectorAll('.spoiler')

var createSpoilerButton = function (element) {

    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML

    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    element.innerHTML = ''
    element.appendChild(button);
    element.appendChild(span);

    button.addEventListener('click', function(){
        //button.parentNode.removeChild(button);
        if (button.textContent == "Afficher le spoiler") {
            button.textContent = 'Masquer le spoiler'
        } else {
            button.textContent = "Afficher le spoiler"
        }
        span.classList.toggle('visible');
    })
    
}

for(var i = 0; i < elements.length; i++){
    createSpoilerButton(elements[i])
}