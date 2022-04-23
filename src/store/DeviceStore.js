import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Телефон'},
            {id: 2, name: 'Планшет'},
            {id: 3, name: 'Ноутбук'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Lenovo'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 250000, img:'http://via.placeholder.com/640x360'},
            {id: 2, name: 'Iphone 13', price: 250000, img:'http://via.placeholder.com/640x360'},
            {id: 3, name: 'Iphone 14', price: 250000, img:'http://via.placeholder.com/640x360'},
            {id: 4, name: 'Iphone 11', price: 250000, img:'http://via.placeholder.com/640x360'}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
}