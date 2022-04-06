let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')


    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    document.querySelector('ul').appendChild(movie);

    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie watched.'
    } else {
        message.textContent = 'Movie added back.'
    }
}

const newForm = document.querySelector('form')

newForm.addEventListener('submit', addMovie)