//fetching the data json and looping 8 times to get 8 countries


const fetchRandomCountries = async () => {
    for (let i = 1; i <= 8; i++) {
        await getCountries()
    }
}

const getCountries = async () => {
    const random = Math.floor((Math.random() * 250) + 1)
    // Fetch the data.json file
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => createCountry(data[random]))
}



let createCountry = (data) => {
    const countryName = data.name
    const countryEl = document.createElement('div')
    countryEl.classList.add('country')
    const countryInnerHtml = `
    <div class="flag"> <img src="${data.flag}"></div>
    <div class="country-info">
        <a href="#" class="country-name nunito-8h">${countryName}</a>
        <p class="info nunito-6h">Population: <span class="population">${data.population}</span></p>
        <p class="info nunito-6h">Region: <span class="region">${data.region}</span></p>
        <p class="info nunito-6h">Capital: <span class="capital">${data.capital}</span></p>
    </div>
    `

    countryEl.innerHTML = countryInnerHtml
    countryContainer.appendChild(countryEl)

    countryEl.addEventListener('click', () => {
        const countryDetailsUrl = `detail.html?name=${encodeURIComponent  (countryName)}`  //Creating a url while passing the specific country's name as a value to query parameter
                    window.location.href = countryDetailsUrl; //assigning the href to the created url
    })

}

fetchRandomCountries()