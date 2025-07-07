"use client";

import { Card,CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction,  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NewTripPage() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card>
          <CardHeader>
            <CardTitle>New Trip</CardTitle>
            <CardDescription>Make a new trip</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
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
                  htmlFor="title"
                >
                  Description
                </label>
                <textarea
                  name="title"
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
                    htmlFor="title"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="title"
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
                    htmlFor="title"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="title"
                    placeholder="Trip Title"
                    className={cn(
                      "w-full border border-gray-300 px-3 py-2",
                      "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    )}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">Create Trip</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}