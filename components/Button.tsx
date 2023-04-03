import { IconCircleChevronRight } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  path: string;
} & ComponentProps<"button">;

const Button = ({ children, ...props }: Props) => {
  return (
    <Link href={`${props.path}`} className="pb-7 pt-12">
      <button
        className={twMerge(
          "flex items-center gap-2 rounded-md bg-secondary p-4 hover:bg-primary",
          props.className
        )}
      >
        <span className="text-white">{children}</span>
        <IconCircleChevronRight color="white " size={20} className="mt-0.5" />
      </button>
    </Link>
  );
};

export default Button;
