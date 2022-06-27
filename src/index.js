import './scss/style.scss';
import 'bootstrap';

const data = async () => {
    try {
        const raesolve = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=79a239672389bc1c02633593b74da9e2');
        const result = await raesolve.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


console.log(data());

