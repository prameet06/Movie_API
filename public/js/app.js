const searchForm = document.getElementById("searchForm")
const search = document.getElementById("search-text");
const all_content = document.getElementById("all-content");
const title_text = document.getElementById("title-text");



searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); //so page wont keep refreshing while submitting
    const name = search.value;
    fetch(`/result?name=${name}`).then((response) => {
        response.json().then((data) => {
            console.log(name);

            if (data.error) {
                console.log(data.error)
            } else {

                all_content.innerHTML = `<div id="page-content">
                <div id="title-block-container">
                    <div id="title-text">${data.title}</div>
                </div>
                <div id="title-block-ratings">
                    <div id="imdb-rating">
                        <div id="imdb-rating-text">ImDb Rating</div>
                    </div>
                    <div id="imdb-rating-value">
                        <div id="imdb-rating-value-text">${data.imdbR}</div>
                    </div>
                    <div id="rotten-tomatoes-rating">
                        <div id="rotten-tomatoes-rating-text">Rotten Tomatoes Rating</div>
                    </div>
                    <div id="rotten-tomatoes-rating-value">
                        <div id="rotten-tomatoes-rating-value-text">${data.rottenR}</div>
                    </div>
                </div>
                <div id="meta-data-container">
                    <ul id="meta-data-list">
                        <li id="year" class="meta-data-list-item">${data.year}</li>
                        <li id="rated" class="meta-data-list-item">.${data.rated}</li>
                        <li id="run-time" class="meta-data-list-item"> .${data.runtime}</li>
                    </ul>
        
                </div>
                <div id="movie-poster-plot">
                    <div id="movie-poster">
                        <img src="${data.poster}" alt="">
                    </div>
                </div>
                <div id="movie-plot">
                    <p id="movie-plot-text">
                    ${data.plot}
                    </p>
                </div>
                <div id="actors">
                    <p id="actors"> Actors: ${data.actors}</p>
                </div>
        
            </div>`




            }

        })
    })



})