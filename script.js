const movies = fetchData()
const $main = document.querySelector("main")

//console.log(movies[0].title) //name of the first movie
//console.log(movies[2].rating) //rating of the third movie
//console.log(movies[1].actors[0].name) //name of the first actor in the second movie

//console.log(avgRating(movies))// logging the average rating of all movies

MovieList()
function MovieList() {
    const $movies = movies.map((movie) => Movie(movie))
        .join('')
    console.log($movies)
    $main.innerHTML = $movies
}

function Movie(movie) {
    return `<section>
    <h3>${movie.title}</h3>
    <h5>Rating: ${stars(movie.rating)}</h5>
    <h5>Length: ${movie.length} minutes</h5>
    <h5>Actors:</h5>
    <ul>
        <li>${movie.actors[0].name}</li>
        <li>${movie.actors[1].name}</li>
    </ul>
    <button onclick=like(${movie.id})>Like! <span>${movie.likes}</span></button>
    </section>`
}

function stars(rating) {
    return new Array(rating)
    .fill("⭐")
    .reduce((o,n) => o + n)
}

function like(id) {
    movies.find((movie) => movie.id == id) .likes++
    MovieList()
}

function fetchData() {
const movies = [ //create array of objects
    {
        id: 1,
        title: "Fast and the Furious I", //key: value
        length: 120,
        rating: 4,
        likes: 0, 
        actors: [
            {
                name: "Vin Diesel", 
                gender: "male"
            },
            {
                name: "Paul Walker",
                gender: "male"
            }
        ]
    }, 
    {
        id: 2,
        title: "Parasite",
        length: 132,
        rating: 5,
        likes: 0,
        actors: [
            {
                name: "Kang-Ho Song",
                gender: "male"
            },
            {
                name: "Jung Ji-so",
                gender: "female"
            }
        ]
    }, 
    {
        id: 3,
        title: "Free Guy",
        length: 155,
        rating: 4,
        likes: 0,
        actors: [
            {
                name: "Ryan Reynolds",
                gender: "male"
            },
            {
                name: "Jodie Comer",
                gender: "female"
            }
        ]
    }
]
return movies
}

function avgRating(movies) {
    sum = 0
    for (let i = 0; i < movies.length; i++) {
        sum += movies[i].rating
    }
    return sum/movies.length
}