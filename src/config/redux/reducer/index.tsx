/* eslint-disable @typescript-eslint/no-explicit-any */
const initialStore = {
    popup: false,
    isLogin: false,
    isLoading: false,
    user: {},
    surah: '',
}

const reducer = (state = initialStore, action: any) => {
    if (action.type === 'CHANGE_POPUP') {
        return {
            ...state,
            popup: action.value
        }
    }

    if (action.type === 'CHANGE_ISLOGIN') {
        return {
            ...state,
            isLogin: action.value
        }
    }

    if (action.type === 'CHANGE_ISLOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }

    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.value
        }
    }

    if (action.type === 'CHANGE_SURAH') {
        return {
            ...state,
            surah: action.value
        }
    }

    return state
}

export default reducer