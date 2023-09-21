function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character?limit=100");
    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
};


getCharacters(data => {
    console.log(data);
    data.results.forEach(character => {
        const article = document.createRange().createContextualFragment(/*html*/`
                <article>
                <div class="img-container">
                    <img src="${character.image}" alt="Personaje">
                </div>
                <h2>${character.name}</h2>
                <p>-${character.origin.name}</p>
                <p>-${character.status}</p>
                <p>-${character.species}</p>
            </article>
            `);
        const main = document.querySelector("main");
        main.append(article);
    });
    });