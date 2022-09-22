import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
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
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
