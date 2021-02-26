import { all, put, takeLatest, select } from "redux-saga/effects"
import { INIT_TYPING, TRY_ADD_LETTER } from 'store/types/typing'
import { finishTyping, nextLetter, startTyping, wrongLetter } from 'store/actions/typing'
import Api from 'services/Api'
import { currentLetterSelector, typingSelector } from "store/selectors"

function* start() {
    // const text = yield call(Api.fetchRandomText)
    const text = 'ай ягода малинка'

    const formattedText = text.split('').map((item, index) => ({
        id: index,
        type: index === 0 ? 'current' : 'neutral',
        value: item
    }))

    yield put(startTyping(formattedText))
}

function* tryAddLetter(action) {
    if (action.payload.length !== 1) {
        return
    }

    const currentLetter = yield select(currentLetterSelector)
    const typing = yield select(typingSelector)

    if (currentLetter.value !== action.payload) {
        yield put(wrongLetter())
        return
    }

    if (typing.text.length <= typing.currentLetter + 1) {
        yield put(finishTyping())
        return
    }
    
    yield put(nextLetter())
}

export default function* typingSaga() {
    yield all([
        takeLatest(INIT_TYPING, start),
        takeLatest(TRY_ADD_LETTER, tryAddLetter)
    ])
}