import axios from "axios";
import Auth from '../pages/Auth';

export default class DeviceService {
    //GET
    static async getDevices() {
        const response = await axios.get('http://z9040170.beget.tech/goods')
        return response
    }

    static async getTypes() {
        const response = await axios.get('http://z9040170.beget.tech/type')
        return response
    }

    static async getBrands() {
        const response = await axios.get('http://z9040170.beget.tech/brand')
        return response
    }

    static async Auth(login, pwd) {
        const response = await axios.get(`http://z9040170.beget.tech/auth/${login}/${pwd}`)
        console.log(response);
        return response
    }

    static async GetAuth(id) {
        const response = await axios.get(`http://z9040170.beget.tech/getauth/${id}`)
        console.log(response);
        return response
    }

    static async BreakAuth(id) {
        const response = await axios.get(`http://z9040170.beget.tech/breakauth/${id}`)
        console.log(response);
        return response
    }

    static async GetFavourite(sessionId) {
        const response = await axios.get(`http://z9040170.beget.tech/favorite/${sessionId}`)
        console.log(response)
        return response
    }

    //POST
    static async AddFavourite(sessionId, deviceId) {
        const response = await axios.post(`http://z9040170.beget.tech/favorite/${sessionId}/${deviceId}`)
        console.log(response)
    }

    static async Reg(login,pwd) {
        const response = await axios.post(`http://z9040170.beget.tech/reg/${login}/${pwd}`)
        console.log(response);
        return response
    }
}