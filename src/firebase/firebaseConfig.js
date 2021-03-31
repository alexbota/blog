import firebase from 'firebase/app'
import 'firebase/database'

export default new Proxy(
  {
    get database() {
      return firebase.database()
    },
    get auth() {
      return firebase.auth()
    },
  },
  {
    get: function (target, name) {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_IREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
        })
      }

      return target[name]
    },
  }
)
