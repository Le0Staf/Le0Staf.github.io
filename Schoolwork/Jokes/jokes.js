function getjoke() {
    JokeAPI.getJokes({
        jokeType: "single"
      })
      
      .then((r) => r.json())
      
      .then((data) => {
          updateUI(data);
      });
}


function updateUI(jokeData) {
    document.getElementById("joke-text").innerHTML = jokeData.joke;
  }
