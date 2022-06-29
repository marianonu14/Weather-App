import './scss/style.scss';
import 'bootstrap';


const form = document.querySelector('#form');

const key = '79a239672389bc1c02633593b74da9e2';

const data = async () => {
    try {
        const resolve = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`);
        const result = await resolve.json();
        
        showConsole(result);
    } catch (error) {
        console.log(error);
    }
}

function showConsole(result){

    const{main:{temp,temp_max,temp_min,humidity}} = result;

    const{weather} = result;

    const state = weather[0].main;

}

data();




