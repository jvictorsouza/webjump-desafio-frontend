import { observable, action } from "mobx";
import {ProductItems, Products, StrObjectArrayStr} from "../interfaces";

export default class FilterStore {
    @observable
    filterOptions: StrObjectArrayStr = {
        'Gênero': [],
        'Cores': [],
        'Tipo': []
    }

    @action
    updateFilterCamp(category: string, value: string) {
        let tempCategoryArray = [...this.filterOptions[category]]
        if (tempCategoryArray.includes(value)){
            tempCategoryArray.splice(tempCategoryArray.indexOf(value), 1)
        }
        else {
            tempCategoryArray.push(value)
        }
        this.filterOptions[category] = tempCategoryArray
    }
    @action
    clearAllFiltersCamp() {
        Object.keys(this.filterOptions).forEach(option => {
            this.filterOptions[option] = []
        })   
    }

    @observable
    filteredData: Array<ProductItems> = []

    @action
    filterData(data: Products | undefined, typeProduct: string) {
        if (data){
            if
            (this.filterOptions['Gênero'].length === 0 &&
            this.filterOptions['Cores'].length === 0 &&
            this.filterOptions['Tipo'].length === 0){
                console.log('nenhum filtro aplicado')
                return data.items
            }
            else{
                console.log('algum filtro aplicado')
                let filteredData: Array<ProductItems> = []
                data['items'].forEach(product => {
                    if (data['filters'][0]['gender'] === 'Gênero'){
                        if (this.filterOptions['Gênero'].includes(product.filter[0].gender)){
                            filteredData.push(product)
                        }
                    }
                    else if (typeProduct === 'Camisas' && data['filters'][0]['color'] === 'Cor'){
                        if (this.filterOptions['Cores'].includes(product.filter[0].color)){
                            filteredData.push(product)
                        }
                    }
                    else if (typeProduct === 'Calçados' && data['filters'][0]['color'] === 'Cor'){
                        if (this.filterOptions['Cores'].includes(product.filter[0].color)){
                            filteredData.push(product)
                        }
        
                    }
                })
                return filteredData
            }
        }   
    }

    @action
    clearFilteredData() {
        this.filteredData = []
    }
}

    