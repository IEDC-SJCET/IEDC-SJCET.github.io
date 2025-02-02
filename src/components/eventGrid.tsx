import { useEffect, useState } from "react";
import EventHeader from "./eventHeader";
import Image from "next/image";
import { fetchEvents } from "@/lib/firebase";
import type { Event, EventCardProps } from "@/types/types";
import GeometricPattern from "./geometricPattern";

const EventCard = ({
  title,
  date,
  pattern = "radial",
  image,
}: EventCardProps) => (
  <div className="group relative aspect-square border border-gray-800">
    {image ? (
      <Image
        src={image}
        alt={title ?? "Event Image"}
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
      <div className="absolute bottom-0 left-0 hidden w-full bg-black bg-opacity-50 p-4 text-white group-hover:block">
        <h2 className="mb-1 text-xl font-bold">{title}</h2>
        <p className="text-sm">{date}</p>
      </div>
    )}
  </div>
);

const EventGrid = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const fetchedEvents = await fetchEvents();
        const eventsWithDefaults = fetchedEvents.map((event: Event) => ({
          title: event.title,
          date: event.date,
          pattern: event.pattern ?? "radial",
          image: event.image ?? "",
        }));
        setEvents(eventsWithDefaults);
      } catch (error) {
        console.error("Error loading events:", error);
       
      }
    }
    void loadEvents();
  }, []);

  return (
    <div className="min-h-screen w-full bg-black p-4">
      <EventHeader />
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {events?.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              pattern={event.pattern}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGrid;
