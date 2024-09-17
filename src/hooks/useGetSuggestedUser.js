import { collection, limit, orderBy, query } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

const useGetSuggestedUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedUser, setSuggestedUser] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const useGetSuggestedUser = async () => {
      try {
        setIsLoading(true);
        const userRef = collection(firestore, "users");
        const q = query(
          userRef,
          where("uid", "not-in", [authUser.uid, ...authUser.following]),
          orderBy("uid"),
          limit(5)
        );

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setSuggestedUser(users);
        setIsLoading(false);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };
    if (authUser) useGetSuggestedUser();
  }, [authUser, showToast]);
  return { isLoading, suggestedUser };
};
export default useGetSuggestedUser;
