export const authSelector = state => state.auth
export const isAuthSelector = state => !!state.auth.jwt

export const typingSelector = state => state.typing
export const typingResultsSelector = state => state.typing.endResults
export const isTypingStartedSelector = state => !!state.typing.startTime
export const isTypingEndedSelector = state => !!state.typing.endTime
export const currentLetterSelector = state => state.typing.text[state.typing.currentLetter]