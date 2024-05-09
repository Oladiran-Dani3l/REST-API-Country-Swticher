const detailContainer = document.querySelector('.detail-container');
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');

// Fetch country data from local JSON file
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Find the country object based on the countryName
        const country = data.find(country => country.name === countryName)
        console.log(country)

        if (country) {
            // Create HTML elements to display country information
            const countryNewEl = document.createElement('section');
            countryNewEl.classList.add('about-country');

            const countryNewElHTML = `
                <div class="about-flag">
                    <img src="${country.flags.svg}" class="image" style="width: 35rem; object-fit:cover;" alt="${country.name}">
                </div>
                <div class="about-info">
                    <h3 class="country-name nunito-8h">${country.name}</h3>
                    <div class="about-information">
                        <div class="info-1">
                            <p class="nunito-6h info">Native Name: <span>${country.nativeName}</span></p>
                            <p class="nunito-6h info">Population: <span>${country.population}</span></p>
                            <p class="nunito-6h info">Region: <span>${country.region}</span></p>
                            <p class="nunito-6h info">Sub Region: <span>${country.subregion}</span></p>
                            <p class="nunito-6h info">Capital: <span>${country.capital}</span></p>
                        </div>
                        <div class="info-2">
                            <p class="nunito-6h info">Top Level Domain: <span>${country.topLevelDomain}</span></p>
                            <p class="nunito-6h info">Currencies: <span>${country.currencies[0].name}</span></p>
                            <p class="nunito-6h info">Languages: <span>${country.languages[0].name}</span></p>
                        </div>
                    </div>
                    <div class="borders"> 
                        <p class="nunito-6h">Border Countries:</p>
                        <ul class="border-countries">
                            ${country.borders.map(border => `<li class="border nunito-3h detail-btn"><a href="">${border}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;

            countryNewEl.innerHTML = countryNewElHTML;
            detailContainer.appendChild(countryNewEl);
        } else {
            // Handle case where country is not found
            console.error('Country not found');
            detailContainer.textContent = "Country data not found.";
        }
    })
    .catch(error => {
        // Handle fetch error
        console.error('Error fetching country data:', error);
        countryNewEl.innerHTML = `<h3>"Failed to fetch country data."<h3/>`
    });