```javascript
let movies = [
    {
        id: 1,
        title: "No Time To Die",
        year: 2021,
        desc: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology",
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
```

# Requirement
- Terdapat variabel movies
- Tampilkan Movies tersebut menggunakan React JS (loop in React JS)
- Jika tahun/year Movies di bawah tahun 2000, maka title akan berwarna Grey, selain itu berwarna black (conditional JSX)
- Casts harus ditampilkan menggunkan list (nested loop)
- Tambahkan tombol "Like" pada masing-masing movies, jika di click maka akan memunculkan alert