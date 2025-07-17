"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

// Using OpenCage Geocoder instead of Google Maps
async function geocodeAddress(address: string) {
  const apiKey = process.env.OPENCAGE_API_KEY!;
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geolocation");
  }

  const data = await response.json();

  if (!data.results.length) {
    throw new Error("No geolocation results found for the provided address");
  }

  const { lat, lng } = data.results[0].geometry;
  return { lat, lng };
}

export async function addLocation(formData: FormData, tripId: string) {
  const session = await auth();
  if (!session) {
    throw new Error("Not authenticated");
  }

  const address = formData.get("address")?.toString();
  if (!address) {
    throw new Error("Missing address");
  }

  const { lat, lng } = await geocodeAddress(address);

  const count = await prisma.location.count({
    where: { tripId },
  });

  await prisma.location.create({
    data: {
      locationTitle: address,
      lat,
      lng,
      tripId,
      order: count,
    },
  });

  redirect(`/trips/${tripId}`);
}
