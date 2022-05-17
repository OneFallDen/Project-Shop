import axios from "axios";

export default class DeviceService {
    static async getAll() {
        const response = await axios.get('http://localhost/newDomain/goods')
        return response
    }
}