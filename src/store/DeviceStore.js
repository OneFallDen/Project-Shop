import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {type: 'Телефон'},
            {type: 'Ноутбук'},
            {type: 'Планшет'}
        ]
        this._brands = [
            {id: 1, brand: 'Apple'},
            {id: 2, brand: 'Honor'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 250000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Телефон', brand: 'Apple'},
            {id: 2, name: 'Iphone 13', price: 250000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Телефон', brand: 'Apple'},
            {id: 3, name: 'Iphone 14', price: 250000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Телефон', brand: 'Apple'},
            {id: 4, name: 'Honor 100', price: 250000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Телефон', brand: 'Honor'},
            {id: 5, name: 'MagicBook', price: 60000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Ноутбук', brand: 'Honor'},
            {id: 6, name: 'Ipad air', price: 25000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Планшет', brand: 'Apple'},
            {id: 7, name: 'Ipad pro', price: 89000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Планшет', brand: 'Apple'},
            {id: 8, name: 'Ipad mini', price: 49000, img:'http://via.placeholder.com/300x200', description: 'lorem asdfasdf asdfasdf asdfasdf asdfasdfasdf', type: 'Планшет', brand: 'Apple'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._typeSortedDevices = {}
        this._searchDevice = {}
        this._favouriteDevice = {}
        makeAutoObservable(this)
    }

    searchSortDevices(search) {
        if(search.length >= 2) {
            this._searchDevice  = this._devices.filter(dev => dev.name.toLowerCase().includes(search.toLowerCase()))
        } else {
            this._searchDevice = {}
        }
    }
    typeSortDevices() {
        if (this._selectedBrand.brand === undefined) {
            this._typeSortedDevices = this._devices.filter(el => el.type === this._selectedType.type)
        } else if (this._selectedType.type === undefined) {
            this._typeSortedDevices = this._devices.filter(el => el.brand === this._selectedBrand.brand)
        } else {
            this._typeSortedDevices = this._devices.filter(el => el.type === this._selectedType.type && el.brand === this._selectedBrand.brand)
        }
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
    setSearchDevice(device) {
        this._searchDevice = device
    }
    setSelectedType(type) {
        if(this._selectedType !== type) {
            this._selectedType = type
        } else {
            this._selectedType = {}
        }
    }
    setSelectedBrand(brand) {
        if(this._selectedBrand !== brand) {
            this._selectedBrand = brand
        } else {
            this._selectedBrand = {}
        }
    }
    setFavourite(favourite) {
        this._favouriteDevice = favourite
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
    get selectedBrand() {
        return this._selectedBrand
    }
    get typeSortedDevices() {
        return this._typeSortedDevices
    }
    get searchedDevice() {
        return this._searchDevice
    }
    get favourite() {
        return this._favouriteDevice
    }
}