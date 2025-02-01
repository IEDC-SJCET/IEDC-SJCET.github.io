import { useEffect, useState } from "react"
import EventHeader from "./eventHeader"
import Image from "next/image"
import { fetchEvents } from "@/lib/firebase"
import type { Event, EventCardProps } from "@/types/types"
import GeometricPattern from "./geometricPattern"


const EventCard = ({ title, date, pattern = "radial", image }: EventCardProps) => (
  <div className="relative aspect-square border border-gray-800 group">
    {image ? (
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        className="object-cover"
        width={400}
        height={600}
      />
    ) : (
      <div className="absolute inset-0 bg-black">
        <GeometricPattern variant={pattern} />
      </div>
    )}
    {title && image && (
      <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full hidden group-hover:block">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm">{date}</p>
      </div>
    )}
  </div>
)

const EventGrid = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function loadEvents() {
      const fetchedEvents = await fetchEvents()

      // Ensure the fetched data matches the `Event` interface
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const eventsWithDefaults = fetchedEvents.map((event: any) => ({
        title: event.title, // Default title if missing
        date: event.date, // Default date if missing
        pattern: event.pattern || "radial", // Default pattern if missing
        image: event.image || "", // Default image if missing
      }))

      // Set the events with default values
      setEvents(eventsWithDefaults)
    }
    loadEvents()
  }, [])

  return (
    <div className="bg-black min-h-screen p-4 w-full">
      <EventHeader />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events?.map((event, index) => (
            <EventCard key={index} title={event.title} date={event.date} pattern={event.pattern} image={event.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventGrid
