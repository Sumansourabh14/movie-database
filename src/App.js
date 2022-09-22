import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import { Home, Account, Login, SignUp } from './pages';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* Account page can only be accessed by a user who is logged in */}
          <Route path="/account" 
            element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
