 let search = document.querySelector('.search')
 let input = document.querySelector('input')
 let city = document.querySelector('.city')
 let temperature = document.querySelector('.temperature')
 let condition = document.querySelector('.condition')
 let icon1 = document.querySelector('.icon')
 let card1 = document.querySelector('.card1')
 let card2 = document.querySelector('.card2')
 let card3 = document.querySelector('.card3')

 function weather(){
 fetch(` http://api.weatherapi.com/v1//current.json/documents:analyzeEntities?q=${input.value}&key=f63176229ff34962b06164427260904`)
 .then((rawdata)=>{
    return rawdata.json()
 })
 .then((data)=>{
    console.log(data);
    
    city.innerText = data.location.name
    temperature.innerText = `Temperature: ${data.current.temp_c}C`
    condition.innerText = data.current.condition.text
    icon1.src = data.current.condition.icon
    card1.innerText = data.current.wind_kph+'kph'
    card2.innerText = data.current.wind_dir
    card3.innerText = data.current.humidity
 })
 }

 search.addEventListener('click',weather)


