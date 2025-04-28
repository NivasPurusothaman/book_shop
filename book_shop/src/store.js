import { createStore, action } from "easy-peasy";

const model = {
    book: localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : {},

    reviews: localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [],

    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],

    likedItems: localStorage.getItem('likedItems') ? JSON.parse(localStorage.getItem('likedItems')) : [],

    booksList: localStorage.getItem('booksList') ? JSON.parse(localStorage.getItem('booksList')) : [],



    setBook: action((state, payload) => {
        state.book = payload;
        localStorage.setItem('book', JSON.stringify(payload));
    }),

    setReviews: action((state, payload) => {
        state.reviews = payload;
        localStorage.setItem('reviews', JSON.stringify(payload));
    }),

    setCartItems: action((state, payload) => {
        state.cartItems = payload;
        localStorage.setItem('cartItems', JSON.stringify(payload));
    }),

    setLikedItems: action((state, payload) => {
        state.likedItems = payload;
        localStorage.setItem('likedItems', JSON.stringify(payload));
    }),

    setBooksList: action((state, payload) => {
        state.booksList = payload;
        localStorage.setItem('booksList', JSON.stringify(payload));
    }),
};

const store = createStore(model);
export default store;