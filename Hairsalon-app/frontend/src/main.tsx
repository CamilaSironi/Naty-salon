import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="15a7b5ac85a54cc2b67e6636fa5db226"
      domain="https://camilawebworks.kinde.com"
      redirectUri= {
	      process.env.NODE_ENV === "production"
	      ? "https://naty-salon.vercel.app/"
	      : "http://localhost:5173"
      }
      logoutUri= {
	      process.env.NODE_ENV === "production"
	      ? "https://naty-salon.vercel.app/"
	      : "http://localhost:5173"
      }
	  >
    <App />
    </KindeProvider>
  </StrictMode>,
)
