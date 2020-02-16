export const increment = (num)=>{
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrement = (num)=>{
    return {
        type : "DECREMENT",
        payload: 20
    }
}

export const login = () => {
    return {
        type: "SIGN_IN"
    }
}