import type { ReactNode } from "react";
import { NextSeo } from "next-seo";

import { Navbar } from "../modules/Navbar";
import { Footer } from "../modules/Footer";

interface DefaultProps {
  title?: string;
  description?: string;
  path?: string;
  banner?: string;
  children: ReactNode;
}

export function Default({
  title,
  description,
  banner,
  path,
  children,
}: DefaultProps) {
  const url = `https://computacao-amostra.com${path ?? ""}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          ...(banner && {
            images: [
              {
                url: banner,
                width: 1200,
                height: 720,
                alt: "Computação Amostra",
              },
            ],
          }),
        }}
      />
      <div className="flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
