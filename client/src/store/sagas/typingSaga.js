import { all, put, takeLatest, select, take, delay, fork } from "redux-saga/effects"
import { INIT_TYPING, TRY_ADD_LETTER } from 'store/types/typing'
import { finishTyping, nextLetter, startTyping, updateTypingSpeed, wrongLetter } from 'store/actions/typing'
import Api from 'services/Api'
import { selectCurrentLetter, selectIsTypingGoingOn, selectTyping } from "store/selectors"

function* setSpeedOfTyping() {
    let isGoing = true

    do {
        isGoing = yield select(selectIsTypingGoingOn)

        yield put(updateTypingSpeed())

        yield delay(300)
    } while(isGoing)
}

function* gameLoop() {
    while (true) {
        yield take(INIT_TYPING)
    
        // const text = yield call(Api.fetchRandomText)
        const text = 'ай ягода малинка'
    
        const formattedText = text.split('').map((item, index) => ({
            id: index,
            type: index === 0 ? 'current' : 'neutral',
            value: item
        }))
    
        yield put(startTyping(formattedText))

        yield setSpeedOfTyping()
    }
}

function* tryAddLetter(action) {
    if (action.payload.length !== 1) {
        return
    }

    const currentLetter = yield select(selectCurrentLetter)
    const typing = yield select(selectTyping)

    if (currentLetter.value !== action.payload) {
        if (currentLetter.type !== 'mistake') {
            yield put(wrongLetter())
        }
        return
    }

    if (typing.text.length <= typing.currentLetter + 1) {
        yield put(updateTypingSpeed())
        yield put(finishTyping())
        return
    }
    
    yield put(nextLetter())
}

export default function* typingSaga() {
    yield all([
        gameLoop(),
        takeLatest(TRY_ADD_LETTER, tryAddLetter)
    ])
}