import axios from 'axios';

const itemsApi = {};

itemsApi.getItems = () => {
    return axios
        .get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json');
};

itemsApi.getChampions = () => {
    return axios
        .get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
};

export default itemsApi;
