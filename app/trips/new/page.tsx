"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createTrip } from "@/lib/actions/create-trip";
import { useTransition, useState } from "react";
import Image from "next/image";
import { UploadButton } from "@/lib/upload-thing";

export default function NewTripPage() {
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>New Trip</CardTitle>
          <CardDescription>Make a new trip</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            action={(formData: FormData) => {
              if(imageUrl){
                formData.append("imageUrl", imageUrl);
              }
              startTransition(() => {
                createTrip(formData);
              });
            }}
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                name="title" // Correct name attribute
                placeholder="Trip Title"
                className={cn(
                  "w-full border border-gray-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                name="description" // Correct name attribute
                placeholder="Trip Description"
                className={cn(
                  "w-full border border-gray-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate" // Correct name attribute
                  className={cn(
                    "w-full border border-gray-300 px-3 py-2",
                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="endDate"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate" // Correct name attribute
                  className={cn(
                    "w-full border border-gray-300 px-3 py-2",
                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                />
              </div>
            </div>

            <div>
              <label> Trip Image </label>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Trip"
                  className="w-full mb-4 rounded-md max-h-48 object-cover"
                  />
              )}
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0].ufsUrl) {
                    setImageUrl(res[0].ufsUrl);
                  }
                }}
                onUploadError={(error: Error) => {
                  console.error("Upload failed:", error);
                }}
              />
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Creating....Create Trip" : "Create Trip"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
