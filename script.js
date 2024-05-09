const darkMode = document.querySelector('.theme-btn')
const filterBtn = document.querySelector('.filter-btn')
const continentOptions = document.querySelector('.continents')
const countryContainer = document.querySelector('.countries')
const bodyEl = document.querySelector('body')
const search = document.querySelector('.search')
const form = document.getElementById('form')
const countryNames = document.querySelectorAll('.country-name')
const continents = document.querySelectorAll('.continent')

const continentTogether = Array.from(continents)


darkMode.addEventListener('click', () => {
    bodyEl.classList.toggle('dark-mode')

    if (bodyEl.classList.contains('dark-mode')) {
        darkMode.innerHTML= '<ion-icon name="moon"></ion-icon> Dark mode'
    } else {
        darkMode.innerHTML= '<ion-icon name="moon-outline"></ion-icon> Dark mode'
    }
})

filterBtn.addEventListener('click', () => {
    if (continentOptions.classList.contains('come-out')) {
        continentOptions.classList.add('go-back')
        continentOptions.classList.remove('come-out')
    }else {
        continentOptions.classList.add('come-out')
        continentOptions.classList.remove('go-back')
    }
})



let continentText = ''
let continentURL = ''
    continentTogether.forEach((area) => {
        area.addEventListener('click', () => {
            continentText = area.innerText
            continentURL = `region.html?continent=${encodeURIComponent(continentText)}`
            window.location.href = continentURL
        })
    })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const searchTerm = search.value

//     if (searchTerm && searchTerm != '') {
//         const searchCountry = async () => {
//             fetch('./data.json')
//             .then((response) => response.json())
//                 .then((data) => 
//                     data.forEach(country => {
//                         console.log(country.name)
                        
//                     })
//         )
//         }
//     }
    
    
// })

// continentOptions.addEventListener('click', (e) =>{
//     console.log('This country belongs to ' + e.target.innerText)

//     const fetchRegions = async () => {
//         for (let i = 1; i <= 8; i++) {
//             await getByRegion()
//         }
//     }
    
//     const getByRegion = async () => {
//         const random = Math.floor((Math.random() * 250) + 1)
//         // Fetch the data.json file
//         fetch('./data.json')
//             .then((response) => response.json())
//             .then((data) => createCountry(data[random]))
        
//     }

//     let createCountry = (data) => {
//         if (data.region === "Africa") {
//             console.log(data.name, data.region, data.capital)

//             const countryEl = document.createElement('div')
//             countryEl.classList.add('country')
//             const countryInnerHtml = `
//         <div class="flag"> <img src="${data.flag}"></div>
//         <div class="country-info">
//             <a href="./detail.html" class="country-name nunito-8h">${data.name}</a>
//             <p class="info nunito-6h">Population: <span class="population">${data.population}</span></p>
//             <p class="info nunito-6h">Region: <span class="region">${data.region}</span></p>
//             <p class="info nunito-6h">Capital: <span class="capital">${data.capital}</span></p>
//         </div>
//         `
    
//             countryEl.innerHTML = countryInnerHtml
//             countryContainer.appendChild(countryEl)
//         }
    
//     }

//     fetchRegions()
// })
