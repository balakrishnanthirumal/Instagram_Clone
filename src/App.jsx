import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PafeLayout from './Layouts/Page Layout/PafeLayout'
import ProfilePage from './Pages/ProfilePages/ProfilePages'

function App() {

  return (
    <>
      <PafeLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="auth/" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PafeLayout>
    </>
  );
}

export default App
