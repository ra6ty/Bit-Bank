import {CurrencyAction, CurrencyEnum, CurrencyState} from "./types";

const defaultState = {
    currency: "USD"
}

export const currencyReducer = (state = defaultState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case CurrencyEnum.CHANGE_CURRENCY:
            return {...state, currency: action.payload}
        default:
            return state
    }
}

export const changeCurrencyAction = (payload: any) => {
    return {type: CurrencyEnum.CHANGE_CURRENCY, payload}
}
