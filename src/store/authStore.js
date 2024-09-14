import {create} from 'zustand';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user-info")),
    login: (user) =>set({user}),
    logOut: () => set({user: null}),
    
    setUser: (user) => set({user})
        

}))
export default useAuthStore