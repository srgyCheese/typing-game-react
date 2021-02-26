import { NEXT_LETTER, INIT_TYPING, START_TYPING, TRY_ADD_LETTER, WRONG_LETTER, FINISH_TYPING } from 'store/types/typing'


export const initTyping = () => ({
    type: INIT_TYPING
})

export const startTyping = text => ({
    type: START_TYPING,
    payload: text
})

export const finishTyping = () => ({
    type: FINISH_TYPING
})

export const tryAddLetter = letter => ({
    type: TRY_ADD_LETTER,
    payload: letter
})

export const nextLetter = () => ({
    type: NEXT_LETTER
})

export const wrongLetter = () => ({
    type: WRONG_LETTER
})