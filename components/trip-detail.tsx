"use client"

import { Trip } from "@/app/generated/prisma"

interface TripDetailClientProps{
    trip: Trip;

}
export default function TripDetailClient({}: TripDetailClientProps){
    return <div className="container mx-auto px-4 p"></div>
}