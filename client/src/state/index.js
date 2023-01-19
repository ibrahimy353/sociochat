import {createSlice} from '@reduxjs/toolkit';

const initialState ={//this data will be used in the entire app as it can be grabed from anywhere and its used in determining the light and dark mode
    mode: 'light',
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = state.mode === "light"? "dark" : "light";   //function that modify the global state from light to dark and viceversa
        },

        setLogin: (state, action) => {
            state.user = state.payload.user;
            state.token = action.payload.token;
        },

        setLogout: (state) =>{
            state.user =null;
            state.token = null;
        },

        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;   
            } else {
                console.erro("user friends non-existent :(")
            }
        },
        setPosts: (state, action) =>{
            state.posts = action.payload.posts;
        },

        setPost: (state, action) =>{
            const updatedPosts = state.posts.map((post) =>{
                if ( post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
        
    }
})  

export const {setMode, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;