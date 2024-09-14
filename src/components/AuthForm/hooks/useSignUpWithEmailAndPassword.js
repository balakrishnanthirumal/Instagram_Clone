import {auth, fireStore}  from '../../../firebase/FireBase';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast  from "../../../components/AuthForm/hooks/useShowToast";


import { doc, setDoc } from "firebase/firestore"; 
import useAuthStore from '../../../store/authStore';


 
    const userSignUpWithEmailAndPassword = () => {
        const [
            createUserWithEmailAndPassword,
            
            loading,
            error
        ] = useCreateUserWithEmailAndPassword(auth);

        const showToast = useShowToast();
        const loginUser = useAuthStore(state => state.login)
        const logOutUser = useAuthStore(state => state.logOut)

          const signup = async(inputs) =>{
            if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
               showToast('Error', 'Please fill all fields', 'error')     
               return;
            }
            try{
                const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
                if (!newUser && error) {
                    showToast("Error", error.message, "error");
                    return;
                }
                if(newUser){
                    const userDoc  = {
                        uid: newUser.user.uid,
                        email: inputs.email,
                        username: inputs.username,
                        fullName: inputs.fullName,
                        bio: '',
                        profilePictureURL: '',
                        followers: [],
                        following: [],
                        posts: [],
                        createdAt: Date.now()
                    }
                    

                    await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                    localStorage.setItem("user-info", JSON.stringify(userDoc));
                    loginUser(userDoc);

                    loginUser()
                }
            }
            catch(error){
                showToast('Error', error.message, 'error')
           
            }
          }
          
          return {loading, error,signup};

    }

export default userSignUpWithEmailAndPassword