const countriesContainer = document.querySelector('.countries-container');

const api_data = fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
console.log(api_data);

api_data.then((res)=>res.json())
.then((data)=>{
   let arrayOf_data = data.data;
   console.log(arrayOf_data)
   arrayOf_data.forEach(country => {
    // console.log(country);
    let countryCard = document.createElement('div');
countryCard .classList.add('country-card');

let cardHTML =`<h3 class="card.title">Country:${country.country}</h3></p>
<p><b>Rank:</b>${country.Rank}</p>
<p><b>population: </b>${country.population} </p>`

countryCard.innerHTML = cardHTML;

countriesContainer.append(countryCard);

   });
})





