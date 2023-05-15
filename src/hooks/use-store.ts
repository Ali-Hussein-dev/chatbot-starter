import { create } from "zustand";
type Chatpair = {
    id: string | number;
    user: string;
    ai: string;
}
type Store = {
    chats: Chatpair[]
    addChatpair: (chatpair: Chatpair) => void
}
export const useStore = create<Store>()(
    (set) => {
        return {
            chats: []
            ,
            addChatpair: (chatpair) => set(s => ({ chats: [...s.chats, chatpair] }))

        }
    }
)