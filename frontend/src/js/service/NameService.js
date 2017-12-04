import axios from 'axios';

export class NameService {
    
    findAllNames() {
        return axios.get('http://localhost:8080/api/names')
                .then(res => res.data._embedded.names);
    }

    findOne(name) {
        return axios.get('http://localhost:8080/search/fname/'+name)
                .then(res => res.data);
    }

}