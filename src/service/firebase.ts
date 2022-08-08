import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCbn9_dasZEVvS_HjIV5vEkFLKFqrxP9r8',
  authDomain: 'react-shop-c6d79.firebaseapp.com',
  projectId: 'react-shop-c6d79',
  storageBucket: 'react-shop-c6d79.appspot.com',
  messagingSenderId: '658573350792',
  appId: '1:658573350792:web:f04882488ed20e5df0cc3d',
  measurementId: 'G-JNGRZT1GN4',
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
