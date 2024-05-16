import { useEffect, useState } from 'react'
import axios from 'axios'

function useIsOnline() {
    const [status, setStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener('online', () => {
            setStatus(true);
        })
    
        window.addEventListener('offline', () => {
            setStatus(false);
        })

        return () => {
            removeEventListener('online', () => {
                setStatus(true);
            })

            removeEventListener('offline', () => {
                setStatus(false);
            })
        }
    }, [])

    return status;
}

function Online() {
  const isOnline = useIsOnline();

  if (isOnline) {
    return "You are online, Yay!"
  }
  else {
    return "You are offline, please connect to the internet"
  }
}

export default Online