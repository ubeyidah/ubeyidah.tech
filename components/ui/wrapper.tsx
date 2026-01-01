import React, { JSX } from "react";
import clsx from "clsx";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

const Wrapper = ({
  className,
  children,
  as: Component = "div",
  id,
}: WrapperProps) => {
  return (
    <Component
      id={id}
      className={clsx("max-w-4xl mx-auto px-3 md:px-5", className)}
    >
      {children}
    </Component>
  );
};

export default Wrapper;
