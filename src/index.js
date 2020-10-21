import Axios from "axios";
import { last } from "lodash";
import { drawData } from "./utils/dom";


const bepisian = 'https://rickandmortyapi.com/api/character/35';
const eColi = 'https://rickandmortyapi.com/api/character/101';
const debrahsPartner = 'https://rickandmortyapi.com/api/character/566';
const michaelJenkins = "https://rickandmortyapi.com/api/character/448";
const numbericon = 'https://rickandmortyapi.com/api/character/253';
const robotSnake = 'https://rickandmortyapi.com/api/character/572';

const wrapper = document.getElementById('data');

const renderApi = (apiUrl) => {
    Axios.get(apiUrl).then(response => {
        drawData(response.data, wrapper)
    });
}

renderApi(bepisian);
renderApi(eColi);
renderApi(debrahsPartner);
renderApi(michaelJenkins);
renderApi(numbericon);
renderApi(robotSnake);
 