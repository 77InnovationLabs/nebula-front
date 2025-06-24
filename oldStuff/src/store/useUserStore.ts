import { create } from 'zustand';

interface UserState {
  walletAddress: string | null;
  studentId: string | null;
  studentName: string | null;
  setWalletAddress: (address: string) => void;
  setStudentId: (id: string) => void;
  setStudentName: (name: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  walletAddress: null,
  studentId: null,
  studentName: null,
  setWalletAddress: (address) => set({ walletAddress: address }),
  setStudentId: (id) => set({ studentId: id }),
  setStudentName: (name) => set({ studentName: name }),
  clearUser: () =>
    set({ walletAddress: null, studentId: null, studentName: null }),
}));
