import axios from "axios";
import Swal from "sweetalert2";

const product = {
    namespaced: true,

    state: {
        products: [],
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    },

    getters: {
        allProduct(state) {
            return state.products;
        },
        sendCart(state) {
            return state.cart;
        },
        cartCount: (state) => {
            return state.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity;
            }, 0);
        }
    },

    mutations: {
        getProducts(state, products) {
            state.products = products;
        },

        add(state, product) {
            const item = state.cart.find(p => p.id === product.id);
            Swal.fire({
                title: 'Add to basket',
                text: false,
                icon: 'success',
                confirmButtonText: false,
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true,
                timer: 2000,
                position: 'top',
            });
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                });
            } else {
                item.quantity++;
            }
            productModule.updateProduct(state.cart);
        },

        increment(state, id) {
            const item = state.cart.find(p => p.id === id);
            item.quantity++;
            productModule.updateProduct(state.cart);
        },

        decrement(state, id) {
            const item = state.cart.find(p => p.id === id);
            if (item.quantity > 1)
                item.quantity--;
            productModule.updateProduct(state.cart);
        },

        deleteItem(state, id) {
            state.cart = state.cart.filter(p => p.id !== id);
            console.log(state.cart)
            Swal.fire({
                title: 'Delete product',
                text: false,
                icon: 'warning',
                confirmButtonText: false,
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true,
                timer: 2000,
                position: 'top',
            });
            productModule.updateProduct(state.cart);
        },

        clearItem(state) {
            state.cart = []
            Swal.fire({
                title: 'Clear list',
                text: false,
                icon: 'warning',
                confirmButtonText: false,
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true,
                timer: 2000,
                position: 'top',
            });
            productModule.updateProduct(state.cart);
        }
    },

    actions: {
        async getProducts({commit}) {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                commit('getProducts', response.data);
            } catch (error) {
                console.log(error);
            }
        },

        addToCart({commit}, product) {
            commit('add', product);
        },

        increment({commit}, id) {
            commit('increment', id);
        },

        decrement({commit}, id) {
            commit('decrement', id);
        },

        deleteItem({commit}, id) {
            commit('deleteItem', id);
        },

        clearList({commit}) {
            commit('clearItem');
        }
    }
};

const productModule = {
    ...product,
    updateProduct(product) {
        localStorage.setItem('cart', JSON.stringify(product));
    }
};

export default productModule;
