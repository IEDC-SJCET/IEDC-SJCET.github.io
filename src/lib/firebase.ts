import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, orderBy, getDocs, limit,  type Timestamp } from "firebase/firestore"
import type { Event } from "@/types/types"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function fetchEvents(): Promise<(Event | { pattern: "cross" | "radial" })[]> {
  const eventsRef = collection(db, "EVENTS")
  const q = query(eventsRef, orderBy("EventStartsAt", "desc"), limit(4))
  const querySnapshot = await getDocs(q)

  const events = querySnapshot.docs.map((doc) => {
    const data = doc.data()

    // Ensure EventStartsAt is typed as Timestamp and access .seconds safely
    const eventStartAt = data.EventStartsAt as Timestamp
    const formattedDate = new Date(eventStartAt.seconds * 1000).toLocaleDateString()

    return {
      title: data.EventName || "Untitled Event",
      date: formattedDate || "No date provided",
      image: data.IMG_URL || "",
    }
  })

  // Interleave empty pattern events
  const interleavedEvents = events.flatMap((event, index) => [
    event,
    { pattern: (index % 2 === 0 ? "cross" : "radial") as "cross" | "radial" }, // Ensure correct type for pattern
  ])

  return interleavedEvents
}
