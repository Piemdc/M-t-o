const apiURL ='https://api.openweathermap.org/data/2.5/weather?q=';
const main =document.getElementById('main');
let form=document.getElementById("valider")
// {
//     "coord": { "lon": -0.1257, "lat": 51.5085 },
//     "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }],
//     "base": "stations",
//     "main": { "temp": 300, "feels_like": 300.21, "temp_min": 298.1, "temp_max": 301.47, "pressure": 1020, "humidity": 46 },
//     "visibility": 10000,
//     "wind": { "speed": 0.45, "deg": 291, "gust": 2.24 },
//     "clouds": { "all": 56 },
//     "dt": 1623673779,
//     "sys": { "type": 2, "id": 268730, "country": "GB", "sunrise": 1623642174, "sunset": 1623701929 },
//     "timezone": 3600,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
// }
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    main.innerHTML="";
     
    
    const ville=document.getElementById("ville").value.toUpperCase();
    console.log(apiURL+ville+'&units=metric&APPID=f3b638b497081223715c0e6676663623')
    showMeteo(apiURL+ville+'&units=metric&APPID=f3b638b497081223715c0e6676663623');


});


function showMeteo(url){
    

    fetch(url).then(res => res.json())

    .then(function(data){
        
    let dataM =data;
    console.log(dataM.weather)


        const ul =document.createElement('ul');
        ul.setAttribute("class","list-group col-7 mx-auto bg-transparent mt-4 shadow");

        const nom = document.createElement('li');
        nom.setAttribute("class","list-group-item active");

        const metli = document.createElement('li');
        metli.setAttribute("class","list-group-item metli ");

        const met = document.createElement('img');
        met.setAttribute("class","icon");
        met.setAttribute("src",`http://openweathermap.org/img/wn/${dataM.weather[0].icon}@2x.png`)

        const degre = document.createElement('li');
        degre.setAttribute("class","list-group-item ");

        const ressenti = document.createElement('li');
        ressenti.setAttribute("class","list-group-item ");

        const humidity = document.createElement('li');
        humidity.setAttribute("class","list-group-item ");

        const vent = document.createElement('li');
        vent.setAttribute("class","list-group-item ");


        nom.innerHTML = `${dataM.name}`;
        degre.innerHTML = `Temperature : ${dataM.main.temp}°c`;
        ressenti.innerHTML = `Ressenti : ${dataM.main.feels_like}°c`;
        humidity.innerHTML = `Humidité : ${dataM.main.humidity} %`;
        vent.innerHTML = `Vent : ${dataM.wind.speed} km/h`
       
        metli.appendChild(met)
        ul.appendChild(nom);
        ul.appendChild(metli);
        ul.appendChild(degre);
        ul.appendChild(ressenti);
        ul.appendChild(humidity);
        ul.appendChild(vent);
       
        main.appendChild(ul);


        // };// Fin return
    }) //Fin function(data)
   
} //fin function shwMeteo