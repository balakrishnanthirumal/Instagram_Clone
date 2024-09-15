import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/FireBase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const showToast = useShowToast();
	const logout = useAuthStore((state) => state.logout);

	const handleLogout = async () => {
		try {
			await signOut();
			localStorage.removeItem("user-info");
			logout();
		} catch (error) {
			
		}
	};

	return { handleLogout, isLoggingOut, error };
};

export default useLogout;