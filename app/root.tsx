// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme as MantineTheme } from "~/styles/mantine-theme";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import { IconContext } from "react-icons";
import { useEffect } from "react";
import useMapLocationsStore from "./stores/useMapLocationsStore";
import AppLayout from "./components/layout/app-layout";
import useTripsStore from "./stores/useTripsStore";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <IconContext.Provider value={{ size: "20" }}>
          <MantineProvider defaultColorScheme="light" theme={MantineTheme}>
            {children}
          </MantineProvider>
        </IconContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  const {
    mapLocations,
    getMapLocations,
    mapLocationsIdArray,
    getMapLocationsArray,
  } = useMapLocationsStore((state) => ({
    mapLocations: state.mapLocations,
    getMapLocations: state.getMapLocations,
    mapLocationsIdArray: state.mapLocationsIdArray,
    getMapLocationsArray: state.getMapLocationsArray,
  }));

  const { useTrips, getUsersTrips } = useTripsStore((state) => ({
    useTrips: state.userTrips,
    upcomingTrips: state.upcomingTrips,
    pastTrips: state.pastTrips,
    getUsersTrips: state.getUserTrips,
  }));

  useEffect(() => {
    if (mapLocations.size === 0) getMapLocations();
    if (!mapLocationsIdArray.length) getMapLocationsArray();
  }, [
    mapLocations,
    getMapLocations,
    mapLocationsIdArray,
    getMapLocationsArray,
  ]);

  useEffect(() => {
    if (useTrips.size === 0) getUsersTrips();
  }, [useTrips, getUsersTrips]);
  console.log({ useTrips });
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
