 let search = document.querySelector('.Search')
 let input = document.querySelector('input')
 let city = document.querySelector('.city')

 function weather(){
 fetch(' http://api.weatherapi.com/v1//current.json/documents:analyzeEntities?q=Pakistan&key=f63176229ff34962b06164427260904')
 .then((rawdata)=>{
    return rawdata.json()
 })
 .then((data)=>{
    console.log(data);
    
    
 })
 }
weather();


