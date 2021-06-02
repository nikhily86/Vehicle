const initialState = {
    data: [],
};
const shareId = (state = initialState, action) => {
    switch (action.type){
        case "SHAREID":
            return {
                ...state,
                data:[
                    ...state.data,
                    {
                        id: action.id,
                    },
                ],
            };
        default: return state;
    }
}


export default shareId;