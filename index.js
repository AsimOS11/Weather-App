const YourWeatherBtn = document.querySelector(".yourweatherwali");
const SearchWeatherBtn = document.querySelector(".searchweatherwali");
const GrantAccessBtn = document.querySelector(".grantaccessbuttonhai");
const SearchCityInp = document.querySelector(".SeachInputWala");
const SearchCityInpBtn = document.querySelector(".SearchInpWalaButton");
const CityNameDisplay = document.querySelector(".citydisplaywalapara");
const FlagDisplay = document.querySelector(".flag-ayga");
const MosamTypeDisplay = document.querySelector(".mosam-type-wala-para");
const MosamTypeIcon = document.querySelector(".mosam-type-icon");
const TempDisplay = document.querySelector(".temp-wala-para");
const SpeedKiValue = document.querySelector(".first-div-para-value");
const HumidityKiValue = document.querySelector(".second-div-para-value");
const cloudsKiValue = document.querySelector(".third-div-para-value");

const GrantPermTnDIv = document.querySelector(".locationwaladiv");
const LoadingDiv = document.querySelector(".loadingwaladiv");
const infoDiv = document.querySelector(".informationwaladiv");
const SearchCityDiv = document.querySelector(".searchcitywaladiv");
const ErrorDiv = document.querySelector(".errorwaladiv");
const API_KEY = "8520867b8305e24a67da73f0db6cfbe4";

let oldtab = YourWeatherBtn;
oldtab.classList.add("active");
getfromSessionStorage();

function getfromSessionStorage(){
    LoadingDiv.classList.remove("active");
    SearchCityDiv.classList.remove("active");
    infoDiv.classList.remove("active");
    ErrorDiv.classList.remove("active");
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        GrantPermTnDIv.classList.add("active");
    }else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
};



function switchTab(newtab) {
    // 1) clear both buttons
    YourWeatherBtn.classList.remove("active");
    SearchWeatherBtn.classList.remove("active");
    // 2) highlight the clicked tab
    newtab.classList.add("active");
    // 3) show/hide sections
    if (newtab === SearchWeatherBtn) {
      GrantPermTnDIv.classList.remove("active");
      infoDiv.classList.remove("active");
      ErrorDiv.classList.remove("active");
      SearchCityDiv.classList.add("active");
    } else {  // YourWeatherBtn
      SearchCityDiv.classList.remove("active");
      ErrorDiv.classList.remove("active");
      getfromSessionStorage();
    }
    oldtab = newtab;
  };

YourWeatherBtn.addEventListener("click", () =>{
    switchTab(YourWeatherBtn);

});
SearchWeatherBtn.addEventListener("click" , ()=>{
    switchTab(SearchWeatherBtn)
});

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    GrantPermTnDIv.classList.remove("active");
    LoadingDiv.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
        LoadingDiv.classList.remove("active");
        infoDiv.classList.add("active");
        renderWeatherData(data);
        console.log("data");

    }
    catch(err){
        LoadingDiv.classList.remove("active");
        ErrorDiv.classList.add("active");

    }

};

function renderWeatherData(weatherInfo){
    CityNameDisplay.innerHTML = weatherInfo?.name ;
    FlagDisplay.src = `https://flagsapi.com/${weatherInfo?.sys?.country.toUpperCase()}/flat/64.png`;
    MosamTypeDisplay.innerHTML = weatherInfo?.weather?.[0]?.description ;
    MosamTypeIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
    TempDisplay.innerHTML = `${weatherInfo?.main?.temp} °C`;
    SpeedKiValue.innerHTML = `${weatherInfo?.wind?.speed} m/s`;
    HumidityKiValue.innerHTML = `${weatherInfo?.main?.humidity}%`;
    cloudsKiValue.innerHTML = `${weatherInfo?.clouds?.all}%`;


};

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        ErrorDiv.classList.add("active");
    }

};

function showPosition(position){
    const userCoordinates = {lat: position.coords.latitude , lon: position.coords.longitude};
    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
    const YourWeatherBtn = document.querySelector(".yourweatherwali");
const SearchWeatherBtn = document.querySelector(".searchweatherwali");
const GrantAccessBtn = document.querySelector(".grantaccessbuttonhai");
const SearchCityInp = document.querySelector(".SeachInputWala");
const SearchCityInpBtn = document.querySelector(".SearchInpWalaButton");
const CityNameDisplay = document.querySelector(".citydisplaywalapara");
const FlagDisplay = document.querySelector(".flag-ayga");
const MosamTypeDisplay = document.querySelector(".mosam-type-wala-para");
const MosamTypeIcon = document.querySelector(".mosam-type-icon");
const TempDisplay = document.querySelector(".temp-wala-para");
const SpeedKiValue = document.querySelector(".first-div-para-value");
const HumidityKiValue = document.querySelector(".second-div-para-value");
const cloudsKiValue = document.querySelector(".third-div-para-value");

const GrantPermTnDIv = document.querySelector(".locationwaladiv");
const LoadingDiv = document.querySelector(".loadingwaladiv");
const infoDiv = document.querySelector(".informationwaladiv");
const SearchCityDiv = document.querySelector(".searchcitywaladiv");
const ErrorDiv = document.querySelector(".errorwaladiv");
const API_KEY = "8520867b8305e24a67da73f0db6cfbe4";

let oldtab = YourWeatherBtn;
oldtab.classList.add("active");
getfromSessionStorage();

function getfromSessionStorage(){
    LoadingDiv.classList.remove("active");
    SearchCityDiv.classList.remove("active");
    infoDiv.classList.remove("active");
    ErrorDiv.classList.remove("active");
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        GrantPermTnDIv.classList.add("active");
    }else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
};



function switchTab(newtab) {
    // 1) clear both buttons
    YourWeatherBtn.classList.remove("active");
    SearchWeatherBtn.classList.remove("active");
    // 2) highlight the clicked tab
    newtab.classList.add("active");
    // 3) show/hide sections
    if (newtab === SearchWeatherBtn) {
      GrantPermTnDIv.classList.remove("active");
      infoDiv.classList.remove("active");
      ErrorDiv.classList.remove("active");
      SearchCityDiv.classList.add("active");
    } else {  // YourWeatherBtn
      SearchCityDiv.classList.remove("active");
      ErrorDiv.classList.remove("active");
      getfromSessionStorage();
    }
    oldtab = newtab;
  };

YourWeatherBtn.addEventListener("click", () =>{
    switchTab(YourWeatherBtn);

});
SearchWeatherBtn.addEventListener("click" , ()=>{
    switchTab(SearchWeatherBtn)
});

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    GrantPermTnDIv.classList.remove("active");
    LoadingDiv.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
        LoadingDiv.classList.remove("active");
        infoDiv.classList.add("active");
        renderWeatherData(data);
        console.log("data");

    }
    catch(err){
        LoadingDiv.classList.remove("active");
        ErrorDiv.classList.add("active");

    }

};

function renderWeatherData(weatherInfo){
    CityNameDisplay.innerHTML = weatherInfo?.name ;
    FlagDisplay.src = `https://flagsapi.com/${weatherInfo?.sys?.country.toUpperCase()}/flat/64.png`;
    MosamTypeDisplay.innerHTML = weatherInfo?.weather?.[0]?.description ;
    MosamTypeIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
    TempDisplay.innerHTML = `${weatherInfo?.main?.temp} °C`;
    SpeedKiValue.innerHTML = `${weatherInfo?.wind?.speed} m/s`;
    HumidityKiValue.innerHTML = `${weatherInfo?.main?.humidity}%`;
    cloudsKiValue.innerHTML = `${weatherInfo?.clouds?.all}%`;


};

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        ErrorDiv.classList.add("active");
    }

};

function showPosition(position){
    const userCoordinates = {lat: position.coords.latitude , lon: position.coords.longitude};
    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

GrantAccessBtn.addEventListener("click", getLocation);


const searchfrom = document.querySelector(".formhai");

searchfrom.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let cityName = SearchCityInp.value.trim() ;

    if(!cityName){
        return
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
    

});

async function fetchSearchWeatherInfo(city){
    LoadingDiv.classList.add("active");
    infoDiv.classList.remove("active");
    ErrorDiv.classList.remove("active");
    GrantPermTnDIv.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
        LoadingDiv.classList.remove("active");
        infoDiv.classList.add("active");
        renderWeatherData(data);


    }
    catch(err){
        LoadingDiv.classList.remove("active");
        SearchCityDiv.classList.remove("active");
        ErrorDiv.classList.add("active");
    }

};
    fetchUserWeatherInfo(userCoordinates);
}

GrantAccessBtn.addEventListener("click", getLocation);


const searchfrom = document.querySelector(".formhai");

searchfrom.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let cityName = SearchCityInp.value.trim() ;

    if(!cityName){
        return
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
    

});

async function fetchSearchWeatherInfo(city){
    LoadingDiv.classList.add("active");
    infoDiv.classList.remove("active");
    ErrorDiv.classList.remove("active");
    GrantPermTnDIv.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
        LoadingDiv.classList.remove("active");
        infoDiv.classList.add("active");
        renderWeatherData(data);


    }
    catch(err){
        LoadingDiv.classList.remove("active");
        SearchCityDiv.classList.remove("active");
        ErrorDiv.classList.add("active");
    }

};
