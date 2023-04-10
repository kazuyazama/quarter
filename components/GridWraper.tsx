import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
} & ComponentProps<"div">;

const GridWraper = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={twMerge("grid place-items-center gap-8", props.className)}
    >
      {children}
    </div>
  );
};

export default GridWraper;
