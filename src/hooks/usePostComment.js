import { useState } from "react";
import useShowToast from "./useShowToast";
import { doc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";

const usePostComment = () => {
 
    const [isCommenting, setIsCommenting] = useState(false);

    const showToast = useShowToast();
    const authUser = useAuthStore((state) => state.user);
    const addComment = usePostStore((state) => state.addComment);

    const handlePostComment = async(postId, comment) =>{
        if(isCommenting) return;
       setIsCommenting(true);
       if(!authUser) return showToast("Error", "Please login to comment", "error");
       const newComment = {
        Comment: comment,
        createdAt: Date.now(),
        createdBy: authUser.uid,
        postId: postId
    }
       try {
        await updateDoc(doc(firestore, 'posts', postId), {
            comments: arrayUnion(newComment)}
        
       )
       addComment(postId, newComment);
    
    } 
       catch (error) {
        showToast("Error", error.message, "error");
       }
       finally{
        setIsCommenting(false);
       }
    }
    return {isCommenting, handlePostComment}
}
export default usePostComment