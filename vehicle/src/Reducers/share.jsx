const initialState = 0;
const shareId = (state = initialState, action) => {
    switch (action.type){
        case "SHAREID": return state + 1;
        default: return state;
    }
}

export default shareId;