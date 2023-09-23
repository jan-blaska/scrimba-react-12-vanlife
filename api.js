// Firebase
import { initializeApp } from "firebase/app"
import { 
    getFirestore, 
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    setDoc
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAJ4TnyCwIr1dddNOVBSvzuzNfRX2AWZUI",
  authDomain: "vanlife-de57c.firebaseapp.com",
  projectId: "vanlife-de57c",
  storageBucket: "vanlife-de57c.appspot.com",
  messagingSenderId: "775590203071",
  appId: "1:775590203071:web:98b51effdb75a2f42b400a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// adding the van to database
/*
await setDoc(doc(db, "vans", "3"), { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
*/

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(vans)
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

// Authentication
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}