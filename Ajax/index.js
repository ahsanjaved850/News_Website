document.addEventListener("DOMContentLoaded", function () {
  const data =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const cities = [];

  //Fetch API appoach
  // fetch(data)
  //   .then((blob) => blob.json())
  //   .then((final) => cities.push(...final));

  // asyncs wait API aproach
  const fetchData = async () => {
    try {
      const response = await fetch(data);
      if (!response.ok) {
        throw new Error(`Failed to fetch the data: ${response.statusText}`);
      }
      const citiesData = await response.json();
      cities.push(...citiesData);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };
  fetchData();

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function displayMatch() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
      `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggest");

  searchInput.addEventListener("change", displayMatch);
  searchInput.addEventListener("keyup", displayMatch);
});
