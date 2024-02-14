const text = document.getElementById('text');
const show = document.getElementById('show');

const createText = document.createElement('h1');
createText.innerHTML = "Esto es una prueba de git con github";
createText.classList = "text";
text.append(createText);

const createButton = document.createElement('button');
createButton.innerHTML = 'Mostrar';
show.append(createButton);