const firestoreService = require('firestore-export-import')
const serviceAccount = require('./serviceAccountKey.json')

const databaseUrl = process.env.FIREBASE_DB_URL

firestoreService.initializeApp(serviceAccount, databaseUrl)
firestoreService.restore('./dummyData/spells.json')
