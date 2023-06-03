import axios from "axios";

const VILLE_API_REST_URL = "http://localhost:8080/villes/all";

class APIService {
    getBooks(){
        return axios.get(VILLE_API_REST_URL);
    }
}

export default new APIService();