import { ReactNode } from "react";

type ContainerSize = "narrow" | "default" | "wide";
type ContainerElement = "div" | "section" | "header" | "footer" | "main" | "article";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ContainerElement;
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-6xl",
  default: "max-w-7xl",
  wide: "max-w-screen-2xl",
};

export function Container({
  children,
  className = "",
  as: Element = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Element
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </Element>
  );
}
