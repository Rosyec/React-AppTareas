import React from 'react'


export const workReducer = (initialState: Work[], action: Type) => {

    switch (action.type) {
        case 'Add':
            return [...initialState, action.payload];

        case 'Delete':
            return initialState.filter((item) => item.id !== action.payload.id);

        case 'Done':
            return initialState.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        done: !item.done,
                    }
                }
                return item;
            });

        default:
            return initialState;
    }

}

interface Work {
    id: number,
    description: string,
    done: boolean
}

interface Type {
    type: string,
    payload: Work
}
