export const authSelector = state => state.auth
export const isAuthSelector = state => !!state.auth.jwt

export const typingSelector = state => state.typing
export const isTypingStartedSelector = state => !!state.typing.startTime
export const currentLetterSelector = state => state.typing.text[state.typing.currentLetter]