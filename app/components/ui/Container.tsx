import { ReactNode } from "react";

type ContainerSize = "narrow" | "default" | "wide";
type ContainerElement =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "main"
  | "article";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ContainerElement;
  size?: ContainerSize;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <section className={`w-full px-6 md:px-10 ${className}`.trim()}>
      <div className="max-w-300 mx-auto">{children}</div>
    </section>
  );
}
