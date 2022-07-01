import './scss/style.scss';
import 'bootstrap';

const dataContainer = document.querySelector('#data-container');
const form = document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let cityName = document.querySelector('#input-city').value;
    
    reset();

    data(cityName);
});

const data = async (cityName) => {
    const key = '79a239672389bc1c02633593b74da9e2';

    try {
        const resolve = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`);
        const result = await resolve.json();
        
        getData(result);
    } catch (error) {
        showError(error);
    }
}

function getData(result){
    document.querySelector('#input-city').value = '';

    const{main:{temp,temp_max,temp_min,humidity}} = result;

    const{weather} = result;
    const state = weather[0].main;

    const{name} = result;

    showData(name,state,temp,temp_max,temp_min,humidity);
}

function showData(name,state,temp,temp_max,temp_min,humidity){
    const nameContent = document.createElement('p');
    nameContent.textContent = name;

    const stateContent = document.createElement('p');
    stateContent.textContent = state;

    const tempContent = document.createElement('p');
    tempContent.textContent = temp;

    const tempMaxContent = document.createElement('p');
    tempMaxContent.textContent = temp_max;

    const tempMinContent = document.createElement('p');
    tempMinContent.textContent = temp_min;

    const humidityContent = document.createElement('p');
    humidityContent.textContent = humidity;

    dataContainer.appendChild(nameContent);
    dataContainer.appendChild(stateContent);
    dataContainer.appendChild(tempContent);
    dataContainer.appendChild(tempMaxContent);
    dataContainer.appendChild(tempMinContent);
    dataContainer.appendChild(humidityContent);

}

function showError(){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'City Not Found';

    dataContainer.appendChild(errorMessage);
}

function reset(){
    const content = document.querySelector('#data-container');
    while (content.children.length > 0){
        content.children[0].remove();
    }
}



