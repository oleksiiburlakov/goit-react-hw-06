import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { id: 1, name: "Alexander Ivanov", phone: "+1234567890" },
            { id: 2, name: "Maria Petrova", phone: "+0987654321" },
            { id: 3, name: "Andrew Smith", phone: "+1122334455" },
            { id: 4, name: "Olivia Johnson", phone: "+5566778899" },
            { id: 5, name: "James Brown", phone: "+6677889900" }
        ],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        }, 
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => 
                item.id !== action.payload
            )
        },
        
    },
});

export const {addContact, deleteContact} = slice.actions;
export default slice.reducer;