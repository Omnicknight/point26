import Axios from "axios";

const { defaultTo } = require("lodash");

const back = (data, name) => {
    const person = document.getElementById(name);
    const span = document.createElement('span');
    span.id = 'First-seen';
    person.appendChild(span);
    span.innerHTML = data;
}

const epis = (data, name) => {
    Axios.get(data.episode[0]).then(response => {
        back(response.data.name, name)})
}

const rings = (status) => {
    let green = 'green';
    let grey = 'grey';
    let red = 'red';
    if(status === "Alive") {
        return green;
    } else if (status === "unknown") {
        return grey;
    } else {
        return red;
    }
}

export const createDataElement = (data) => {
    epis(data, data.name);

    // const t = rings(data.status);
    // console.log(t);
    const ret = `<div class="card">
    <div id="image">
    <img id="imgs" src="${data.image}"></img>
    </div>
    <div id="${data.name}" class="aboutHero">
    <h1 id="dataName">${data.name}</h1><br>
    <div id=${rings(data.status)}></div>
    <span id="dataStatus">${data.status}</span>
    <span id="dataSpecies">- ${data.species}</span><br>
    <span class="info">Last known location:</span><br>
    <span id="dataLocation">${data.location.name}</span><br>
    <span class="info">First seen in:</span><br>
    </div>
    </div>`;
    return ret;
}

export const drawData = (data, wrapper = document.body) => {
    const div = document.createElement('div');
    wrapper.appendChild(div);
    div.innerHTML = createDataElement(data);  
}


