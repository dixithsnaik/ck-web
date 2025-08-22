import React from "react";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export function Section({ children }: SectionProps) {
  return <>{children}</>;
}

type PageSeatterProps = {
  children: ReactNode | ReactNode[];
  colors?: string[];
};

export function PageSeatter({
  children,
  colors = ["bg-white", "bg-[#F8F7FE]"], // 👈 test with built-in Tailwind colors
}: PageSeatterProps) {
  const items = React.Children.toArray(children);

  return (
    <>
      {items.map((child, i) => (
        <section key={i} className={colors[i % colors.length]}>
          {child}
        </section>
      ))}
    </>
  );
}

export default PageSeatter;
