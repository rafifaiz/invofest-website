import { create } from 'zustand';

interface AuthState {
    isLoggedIn: boolean;
    userNIM: string | null;
    login: (nim: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    userNIM: null,
    login: (nim) => set({ isLoggedIn: true, userNIM: nim }),
    logout: () => set({ isLoggedIn: false, userNIM: null }),
}));