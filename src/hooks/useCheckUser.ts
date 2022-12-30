import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { authService } from './../service/firebase';
import { firebaseConfig } from '../service/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default async function useCheckUser() {
  const router = useLocation();
  const navigate = useNavigate();

  const _sessionKey = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
  const session = sessionStorage.getItem(_sessionKey);
  if (session) {
    onAuthStateChanged(authService, (user) => {
      const isLogined = JSON.parse(session).uid === user?.uid;
      if (
        isLogined &&
        (router.pathname === '/login' || router.pathname === 'signup')
      ) {
        navigate('/');
      }
    });
  }
}
