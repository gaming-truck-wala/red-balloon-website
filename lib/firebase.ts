// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCF1RGr29RnizLjsXPBnlgm2_zvUKAjna4',
  authDomain: 'contact-form-3f6c0.firebaseapp.com',
  projectId: 'contact-form-3f6c0',
  storageBucket: 'contact-form-3f6c0.appspot.com',
  messagingSenderId: '36948007811',
  appId: '1:36948007811:web:26e2af0290c3205247f4b6',
  measurementId: 'G-0WLM4YJWF7',
}
let analytics
// Initialize Firebase
const baseDomain = 'https://gamingtruckwala.com/'
const app = initializeApp(firebaseConfig)

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app)
  logEvent(analytics, 'page_view', {
    page_title: 'Home Page',
    page_location: baseDomain,
    page_path: '/',
  })
  logEvent(analytics, 'page_view', {
    page_title: 'Pricing Page',
    page_location: `${baseDomain}/pricing`,
    page_path: '/pricing',
  })
  logEvent(analytics, 'page_view', {
    page_title: 'About Page',
    page_location: `${baseDomain}/about`,
    page_path: '/about',
  })
  logEvent(analytics, 'page_view', {
    page_title: 'Contact Page',
    page_location: `${baseDomain}/contact`,
    page_path: '/contact',
  })
  logEvent(analytics, 'page_view', {
    page_title: 'Franchise Page',
    page_location: `${baseDomain}/franchise`,
    page_path: '/franchise',
  })
}

export const auth = getAuth()
export const db = getFirestore()

export const storage = getStorage()

export default app

// access firestore
