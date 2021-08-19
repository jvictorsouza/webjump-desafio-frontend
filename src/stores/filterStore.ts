import { observable, action } from "mobx";
import {StrObjectArrayStr} from "../constants/constants"

export interface StrObjectArrayBool {
    [index: string]: Array<boolean>;
}

export default class FilterStore {
    @observable
    filterOptions: StrObjectArrayStr = {
        'Categorias': [],
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
        console.log(this.filterOptions[category])
    }
}

    