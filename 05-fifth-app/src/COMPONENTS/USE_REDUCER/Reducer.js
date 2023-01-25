export const reducer =(state, action)=>{
    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books:allBooks,
            modelText:"Book is added in the books list",
            isModelText: true
        }
    }else if(action.type === "REMOVE"){
        const filterBooks = [...state.books].filter((book)=> book.id !== action.payload);
        return {
            ...state,
            books:filterBooks,
            modelText:"Book is removed from the books list",
            isModelText: true
        }
    }else
        return state;
};