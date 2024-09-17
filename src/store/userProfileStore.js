import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // used to update the numbr of posts of a user
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),
  deletePost: (postId) => set(state =>({
    userProfile: {
      ...state.userProfile,
      posts: state.userProfile.posts.filter(post => post !== postId),
    }
  }))

}));

export default useUserProfileStore;
