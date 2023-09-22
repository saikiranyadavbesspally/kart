export const addItem = (item)=>{
    return{
        type : "ADDITEM",
        payload : item
    }

}

export const delItem = (item)=>{
    return{
        type:"DELETEITEM",
        payload : item
    }
}