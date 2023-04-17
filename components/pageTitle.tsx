import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"h1">;

const PageTitle = ({ children,...props}: Props) => {
  return (
    <h1 className="grid h-[76px] lg:h-20 w-full place-items-center bg-gradient-to-r  from-secondary to-primary text-2xl text-white ">
      {children}
    </h1>
  );
};

export default PageTitle;
