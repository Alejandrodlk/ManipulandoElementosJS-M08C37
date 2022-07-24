console.log('moviesAdd.ejs success');

const h1 = document.querySelector('.moviesAddTitulo')
h1.innerHTML = 'AGREGAR PELICULAS'
h1.classList.add('titulo')

const article = document.querySelector('article')
article.classList.add('fondoTransparente')

const section = document.querySelector('section')
section.classList.add('fondoCRUD')