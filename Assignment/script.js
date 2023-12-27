const countryInput = document.getElementById('countryInput'),
search = document.getElementById('search'),
search_result = document.getElementById('search_result'),
flag = document.getElementById('flag'),
name = document.getElementById('name'),
currency = document.getElementById('currency'),
capital = document.getElementById('capital'),
population = document.getElementById('population');

search.addEventListener('click',() =>{
    let countryName = countryInput.value;

    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fulltext=true`
    
    console.log(finalURL)
    fetch(finalURL).then((response)=> response.json()).then((data)=>{
        search_result.style.display = 'block';
        countryData = data[0]
        console.log(countryData)
        flag.src = countryData.flags.svg;
        name.innerHTML = countryData.name.common
        currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
        capital.innerHTML = countryData.capital
        population.innerHTML = countryData.population
    })
})