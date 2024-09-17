import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from '../store/userProfileStore';
import { useState } from "react";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";

const useFollowUser = (userId) => {
  
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const  {user, setUser}= useAuthStore()
    const {userProfile, setUserProfile} = useUserProfileStore();
    const showToast = useShowToast();

    const handleFollowers = async() => {
        setIsUpdating(true);
        try {
            const currentUserRef = doc(firestore, "users", user.uid);
            const userToFollowOrUnfollow = doc(firestore, "users", userId);

            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
            })

            await updateDoc(userToFollowOrUnfollow, {
                followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
            })
            //UNfollow
            if(isFollowing) {
                setUser({...user, following: user.following.filter((id) => id !== userId)})

                if(userProfile)
                setUserProfile({ ...userProfile, followers:  userProfile.followers.filter((id) => id !== user.uid) })

                localStorage.setItem ('user-info', JSON.stringify({ ...user, following: user.following.filter((id) => id !== userId) }));  
                setIsFollowing(false)
            }
            //follow
            else{
                setUser({...user, following: [...user.following, userId]})
                if(userProfile)
                setUserProfile({ ...userProfile, followers: [...userProfile.followers, user.uid] })
                

                localStorage.setItem ('user-info', JSON.stringify({ ...user, following: [...user.following, userId] }));  
                setIsFollowing(true)
            }

           

     
        } catch (error) {
            showToast("Error", error.message, "error");
        }
        setIsUpdating(false)
    }

    useEffect(() => {
        const isFollowing = user.following.includes(userId);
        setIsFollowing(isFollowing);
    }, [user, userId])

    return {isUpdating, isFollowing, handleFollowers}
}
export default useFollowUser