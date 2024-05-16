// Suspense API --> asynchronus component fetching asynchronous data fetching
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/Dashboard'))   // lazy loading
const Landing = lazy(() => import('./components/Landing'))       // lazy loading

// import { Dashboard } from './components/Dashboard'       // not using lazy loading
// import { Landing } from './components/Landing'           // not using lazy loading

function AppRouting() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  // useNavigate must always be inside a component that is inside BrowserRouuter
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        // window.location.href = '/';     // not the right way, as this relods everytime --> hard reload
        navigate('/');                     // navigate is the right way, soft reload
      }}>Landing</button>
      <button onClick={() => {
        // window.location.href = '/dashboard';
        navigate('/dashboard');
      }}>Dashboard</button>
    </div>
  )
}

export default AppRouting