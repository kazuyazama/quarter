import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
} & ComponentProps<"div">;

const SecTitle = ({ children, ...props }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <h3
        className={twMerge(
          " text-center text-2xl font-bold  ",
          props.className
        )}
      >
        {children}
      </h3>
      <span className=" w-36 border-b-4 border-primary"></span>
    </div>
  );
};

export default SecTitle;
