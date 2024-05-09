const regionContainer = document.querySelector('.region');
const urlParams = new URLSearchParams(window.location.search);
const regionArea = urlParams.get('name');

const fetchRegions = async () => {
    for (let i = 1; i <= 30; i++) {
        await getContinent()
    }
}

const getContinent = async () => {
    // Fetch the data.json file
    const random = Math.floor((Math.random() * 250) + 1)
    // Fetch the data.json file
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => createCountry(data[random]))
}


fetchRegions()