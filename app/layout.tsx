"use client";

import { Providers } from "./providers";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState(false);

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
        <title>CheckWOW</title>
      </head>
      <body>
        <Providers>
          {token ? <NavBar /> : ""}
          {children}
        </Providers>
      </body>
    </html>
  );
}
