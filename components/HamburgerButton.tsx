import classNames from "classnames";

type Props = {
  isOpen: boolean;
  DrawerToggle: () => void;
}; 

const HamburgerButton = ({ isOpen, DrawerToggle }: Props) => {
  return (
    <button
      onClick={DrawerToggle}
      className="flex h-20 w-20 cursor-pointer items-center bg-secondary px-8 py-6 lg:hidden "
    >
      <div className="  relative z-50 flex h-6 w-6 items-center justify-center transition-all  ">
        <span
          className={classNames(
            isOpen && "  top-0 translate-y-2  rotate-45 ",
            "absolute left-0 top-0  block h-1 w-6 rounded-md bg-white duration-300"
          )}
        ></span>
        <span
          className={classNames(
            isOpen && " opacity-0",
            "absolute left-0 top-2  block h-1 w-6 rounded-md bg-white  duration-300"
          )}
        ></span>
        <span
          className={classNames(
            isOpen && "  top-0 -translate-y-2 -rotate-45    ",
            "absolute left-0 top-4  block h-1 w-6 rounded-md bg-white  duration-300"
          )}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerButton;
