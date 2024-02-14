const text = document.getElementById('text');
const show = document.getElementById('show');

const createText = document.createElement('h1');
createText.innerHTML = "Esto es una prueba de git con github";
createText.classList = "text";
createText.style.display = 'none';
text.append(createText);

const createButton = document.createElement('button');
createButton.innerHTML = 'Mostrar';
createButton.classList = 'button';
show.append(createButton);

show.addEventListener('click', () => {
  createText.style.display = 'flex';
})