import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.map(el=>({...el})).sort((a:UserType,b:UserType) =>
               action.payload === 'up' ?  (a.name > b.name ? 1 : -1) :
               action.payload === 'down' ? (a.name < b.name ? 1 : -1) : 0
            )
        }
        case 'check': {

            return state.filter(el=>({...el}).age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
