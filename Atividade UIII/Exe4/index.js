var moviesUL = document.querySelector('div#movies_list ul');

var film1 = {titulo: 'Crepusculo', ano: 2010, genero: 'Comédia'};
var film2 = {titulo: 'Senhor dos anéis', ano: 2000, genero: 'Ficção'};
var film3 = {titulo: 'Harry Potter', ano: 2003, genero: 'Ficção'};
var movies = [film1, film2, film3];
init();

function init(){
    for(let movie of movies){
        var movieElement = document.createElement('li');
        moviesUL.appendChild(movieElement);

        var movieText2 = document.createTextNode(movie.titulo);
        movieElement.appendChild(movieText2);

        var movieAttUL = document.createElement('ul');
        movieElement.appendChild(movieAttUL);
        
        var movieAttLI = document.createElement('li');
        movieAttUL.appendChild(movieAttLI);
        var movieText = document.createTextNode(movie.ano);
        movieAttLI.appendChild(movieText);
    
        var movieAttLI3 = document.createElement('li');
        movieAttUL.appendChild(movieAttLI3);
        var movieText3 = document.createTextNode(movie.genero);
        movieAttLI3.appendChild(movieText3);
    }
}