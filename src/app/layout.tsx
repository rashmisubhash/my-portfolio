import "../styles/globals.css";
import "dotenv/config";
import clsx from "clsx";
import { ReactNode } from "react";
import { pt_sans, homevideo, blacker, garden_delight } from "../utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import getCopyData from "../utils/getCopyData";
import ErrorUI from "../components/errorUI";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { error } = await getCopyData();

  return (
    <html lang="en">
      <body
        className={clsx(
          pt_sans.variable,
          homevideo.variable,
          blacker.variable,
          garden_delight.variable,
          "font-sans antialiased",
        )}
      >
        {error ? (
          <ErrorUI />
        ) : (
          <>
            {children}
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
