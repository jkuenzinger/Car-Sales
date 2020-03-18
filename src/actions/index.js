// in ths file I am going to delcar all my action
// creating a add_total, add_feature, and remove Feature in this actions file

export const ADD_TOTAL = 'ADD_TOTAL'
export const addTotal = (total) => {
    return{
        type: ADD_TOTAL,
        payload: total
    }
}

export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (feature) => {
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = (feature) => {
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}


