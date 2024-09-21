import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import PafeLayout from './Layouts/Page Layout/PafeLayout'
import ProfilePage from './Pages/ProfilePages/ProfilePages'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/FireBase'
function App() {
  const [authUser] = useAuthState(auth)
  return (
    <>
      <PafeLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/auth"} />} />
          <Route path="auth/" element={!authUser ? <AuthPage /> : <Navigate to={"/"} />} />
          <Route path='/:username' element={<ProfilePage />} />
        </Routes>

      </PafeLayout>
    </>
  );
}

export default App
