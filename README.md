# Travel Planner

Travel Planner is a web application built with [Next.js](https://nextjs.org) that allows users to plan their trips, create itineraries, organize destinations, and share travel plans. It includes features like interactive maps, drag-and-drop itinerary management, and integration with third-party services for file uploads and geocoding.

### Live Demo - https://travelly.aryamn.space/
## Features

- **User Authentication**: Secure login and logout using GitHub OAuth.
- **Trip Management**: Create, view, and manage trips with details like title, description, start and end dates, and images.
- **Itinerary Planning**: Add, reorder, and manage locations for each trip.
- **Interactive Maps**: Visualize trip locations on a map using Leaflet.
- **File Uploads**: Upload trip images using UploadThing.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL
- **Authentication**: NextAuth.js with GitHub OAuth
- **File Uploads**: UploadThing
- **Maps**: Leaflet and React-Leaflet
- **Geocoding**: OpenCage API

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL database
- GitHub account for OAuth authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/travel-planner.git
   cd travel-planner
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   Auth_Github_ID="your_github_client_id"
   Auth_Github_Secret="your_github_client_secret"
   AUTH_SECRET="your_auth_secret"
   UPLOADTHING_TOKEN="your_uploadthing_token"
   OPENCAGE_API_KEY="your_opencage_api_key"
   ```

4. Generate the Prisma client and migrate the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.

## Folder Structure

```
travelplanner/
├── app/                     # Next.js app directory
│   ├── api/                 # API routes
│   ├── trips/               # Trip-related pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
├── components/              # Reusable UI components
├── lib/                     # Utility functions and server actions
├── prisma/                  # Prisma schema and migrations
├── public/                  # Static assets
├── styles/                  # Global styles
├── .env.local               # Environment variables
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Deployment

The easiest way to deploy this application is to use [Vercel](https://vercel.com). Follow these steps:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Set up the environment variables in the Vercel dashboard.
4. Deploy the application.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Prisma](https://www.prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Leaflet](https://leafletjs.com)
- [UploadThing](https://uploadthing.com)
- [OpenCage Geocoder](https://opencagedata.com)

---

Feel free to customize this `README.md` to better suit your project!
