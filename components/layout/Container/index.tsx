import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export const Container: React.FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};
