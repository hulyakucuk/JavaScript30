const url="https://api.openweathermap.org/data/2.5/";

const key="fb9c6c26c99d9e827fceeec8bb899ba9";

const setInput=(e)=>{
    if(e.keyCode=="13")
    getResult(searchBar.value)
}

const getResult=(cityName)=>{
   
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(res=>res.json())
   .then(dataResult)
   console.log(query)
}


const dataResult=(data)=>{
    let city=document.querySelector(".city")
    city.innerText=`${data.name},${data.sys.country}`
    
    
    
    let temp=document.querySelector(".temp")
    temp.innerText=`${Math.round(data.main.temp)}C`

    let desc=document.querySelector(".desc")
    desc.innerText=`${data.weather[0].description}`

    let minmax=document.querySelector(".minmax")
    minmax.innerText=`${Math.round(data.main.temp_min)}`
}


const searchBar=document.getElementById("searchbar");
searchBar.addEventListener("keypress",setInput);






