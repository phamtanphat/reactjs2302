// const defaultWords = [
//     { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
//     { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
//     { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
// ]

function wordsReducer(state = [] , action){
    if(action.type === 'SET_WORDS') return action.words
    if (action.type === 'TOGGLE_WORD') {
        const newWords = state.map(w => {
            if (w._id !== action._id) return w;
            return { ...w, isMemorized: !w.isMemorized }
        });
        return newWords;
    }
    if (action.type === 'ADD_WORD') {
        const newWords = state.concat(action.word);
        return newWords;
    }
    if (action.type === 'REMOVE_WORD') {
        const newWords = state.filter(w => w._id !== action._id);
        return newWords
    }
    return state;
}
export default wordsReducer