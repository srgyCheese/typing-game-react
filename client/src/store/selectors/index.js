export const selectAuth = state => state.auth
export const selectIsAuth = state => !!state.auth.jwt

export const selectTyping = state => state.typing
export const selectTypingResults = state => state.typing.endResults
export const selectIsTypingStarted = state => !!state.typing.startTime
export const selectIsTypingGoingOn = state => state.typing.startTime && !state.typing.endTime
export const selectIsTypingEnded = state => !!state.typing.endTime
export const selectCurrentLetter = state => state.typing.text[state.typing.currentLetter]