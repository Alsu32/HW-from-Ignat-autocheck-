export type ThemeType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId:action.id}

        default:
            return state
    }
}

type changeThemeIdType = {
    type: string
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
