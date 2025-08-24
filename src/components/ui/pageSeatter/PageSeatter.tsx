import React from "react";
import type { ReactNode, HTMLAttributes } from "react";

type SectionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Section({ children, ...props }: SectionProps) {
  return <section {...props}>{children}</section>;
}

type PageSeatterProps = {
  children: ReactNode | ReactNode[];
  colors?: string[];
} & HTMLAttributes<HTMLElement>;

export function PageSeatter({
  children,
  colors = ["bg-ckBgPrimary", "bg-ckBgSecondary"],
  ...props
}: PageSeatterProps) {
  const items = React.Children.toArray(children);

  return (
    <>
      {items.map((child, i) => (
        <section
          key={i}
          className={`${colors[i % colors.length]} ${props.className ?? ""}`}
          {...props}
        >
          {child}
        </section>
      ))}
    </>
  );
}

export default PageSeatter;
