import axios from "axios";


const instance = axios.create({
    baseURL: 'http://192.168.0.85:8080/'
});



export function getScootersInZone(zoneId) {
    return instance.get(`/getScooters/${zoneId}`)
}



