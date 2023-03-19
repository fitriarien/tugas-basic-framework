let movies = [
    {
        id: 1,
        title: "No Time To Die",
        year: 2021,
        desc: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology.",
        casts: [ "Daniel Craig", "Rami Malek", "Léa Seydoux" ],
        poster: "https://cdn1-production-images-kly.akamaized.net/3buPDf0MVwgDuGk-A63Wxi3943I=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2987071/original/060424900_1575520835-james_bond.jpg"
    },
    {
        id: 2,
        title: "Squid Game",
        year: 2021,
        desc: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
        casts: [ "Lee Jung Jae", "HoYeon Jung", "Park Hae Soo", "Yeong-su Oh" ],
        poster: "https://www.blackxperience.com/assets/blackattitude/blackstyle//squid-game-header-2-1633290690220-35-300x300.jpg"
    },
    {
        id: 3,
        title: "12 Angry Men",
        year: 1957,
        desc: "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
        casts: [ "Henry Fonda", "Lee J Cobb", "Jack Klugman"],
        poster: "https://i.pinimg.com/originals/40/10/ea/4010ea6e29cde26c2e4e501d14450bec.jpg"
    },
    { 
        id: 4,
        title: "Fight Club",
        year: 1999,
        desc: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        casts: [ "Brad Pitt", "Edward Norton"],
        poster: "https://image.posterlounge.com/img/products/680000/676414/676414_poster_l.jpg"
    },
    {
        id: 5,
        title: "Gone Girl",
        year: 2014,
        desc: "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary.",
        casts: [ "Rosemund Pike", "Ben Affleck", "Neil Patrick Harris"],
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"
    }
]

function clickMe() {
  alert("You like the movie!");
}

const contain = (
    <div className="container">
        <div className="bg-white my-0">
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Now</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {movies.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full sm:h-full"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    {movie.year < 2000 ? (<h3 className="text-xl font-bold text-gray-500">{movie.title}</h3>) : (<h3 className="text-xl font-bold text-black">{movie.title}</h3>)}
                    <p className="mt-1 text-base font-bold text-gray-700">{movie.year}</p>
                    <p className="mt-1 text-sm text-gray-600">{movie.desc}</p>
                  </div>
                  <p className="text-base font-bold text-gray-700 py-1 ">Actors</p>
                  <ul className="pl-5 text-sm font-semibold text-gray-700 list-decimal">
                    {movie.casts.map((cast, i) => (
                      <li key={i}>{cast}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <div className="flex justify-start space-x-2">
                    <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-900 rounded cursor-pointer" onClick={ clickMe }>
                      Like
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
)

const movieApp = document.querySelector('#movie-app');
const root = ReactDOM.createRoot(movieApp);
root.render(contain);