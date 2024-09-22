import { create } from 'zustand';

export const useUserStore = create((set) => ({
    id: localStorage.getItem('id') || null,
    username: localStorage.getItem('username') || null,
    email: localStorage.getItem('email') || null,
    setUser: (id, username, email ) => {
        set({ id: id });
        set({ username: username });
        set({ email: email });
        localStorage.setItem('id', id);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
    },
    clearUser: () => {
        set({ id: null });
        set({ username: null });
        set({ email: null });
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
    },
}));

export default useUserStore;