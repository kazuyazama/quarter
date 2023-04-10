import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
} & ComponentProps<"h3">;

const SecTitle = ({ children, ...props }: Props) => {
  return (
    <h3
      className={twMerge(
        " border-b-4 border-primary text-center pb-1 inline-grid place-self-center text-2xl font-bold  ",
        props.className
      )}
    >
      {children}
    </h3>
  );
};

export default SecTitle;
