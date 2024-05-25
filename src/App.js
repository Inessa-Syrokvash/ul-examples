import { useEffect, useState } from 'react';
import './App.css';
import LoaderPage from './Loader/LoaderPage';

function App() {
  const [stateLoader, setStatLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStatLoader(false), 3000);
    return() => clearTimeout(timer)
  }, [])
  
  return(
    <div>
        {stateLoader && <LoaderPage />}
    </div>
  )


}

export default App;
