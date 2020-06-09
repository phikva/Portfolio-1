const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    RickAndMortyCharacters(json);
    console.dir(json);
  })
  .catch(function (error) {
    console.dir(error);
    document.location.href = "error.html";
  });

function RickAndMortyCharacters(json) {
  const results = json.results;

  const resultsContainer = document.querySelector(".row.results");
  let html = "";

  results.forEach(function (result) {
    let typePlaceHolder = "Unknown";
    if (result.type) {
      typePlaceHolder = result.type;
    }

    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">    
            <img class="image" src=${result.image} alt=${result.name}>
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>Type: ${typePlaceHolder}</p>    
                <p>Episode count: ${result.episode.length}</p>                                  
                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
               </div>
            </div>
        </div> `;
  });

  resultsContainer.innerHTML = html;
}
