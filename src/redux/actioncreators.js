import axios from 'axios';

export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}

export function setFilterMode(filterMode){
    return {type : 'SET_FILTER_MODE' , filterMode}
}

export function setWord(){
    return function(dispatch){
        const URL = "https://server2301.herokuapp.com/word"
        axios.get(URL)
        .then(response => dispatch({type : 'SET_WORDS' , words : response.data.words}));
    }
}

export function addWord(en , vn){
    return function(dispatch){
        const URL = "https://server2301.herokuapp.com/word";
        axios.post(URL , {en  , vn })
        .then(response =>dispatch({type : 'ADD_WORD' , word : response.data.w}));
    }
}
 
export function removeWord(_id){
    return function(dispatch){
        const URL = "https://server2301.herokuapp.com/word/" + _id;
        axios.delete(URL)
        .then(response => dispatch({type : 'REMOVE_WORD', _id : response.data.w._id}))
        .catch(error => console.log(error.message));
    }
}
// 
export function toggleWord(_id , isMemorized){
    return function(dispatch){
        const URL = "https://server2301.herokuapp.com/word/";
        axios.put(URL + _id, {isMemorized : !isMemorized})
        .then(response => dispatch({type : 'TOGGLE_WORD' , _id : response.data.w._id}));
    }
}