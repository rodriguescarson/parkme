import React from "react";

const DataTable2 = React.lazy(() => import("pages/DataTable2"));
const Leaflet = React.lazy(() => import("pages/Leaflet"));

const routes = [
  {
    enabled: true,
    path: "/leaflet",
    component: Leaflet,
    navbar: "ParkMe Features",
    child: [
      {
        name: "Basic Map",
        path: "/leaflet/basic",
      },
      {
        name: "Markers",
        path: "/leaflet/markers",
      },
      {
        name: "Get User Location",
        path: "/leaflet/user-location",
      },
      {
        name: "Draw Shapes",
        path: "/leaflet/draw-on-map",
      },
      {
        name: "Draw Polygon",
        path: "/leaflet/polygon",
      },
      {
        name: "Static Map",
        path: "/leaflet/static-map",
      },
      {
        name: "Print",
        path: "/leaflet/print-map",
      },
    ],
  },
  {
    enabled: true,
    path: "/data-table-large",
    component: DataTable2,
    navbar: "User List",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
