import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-[22rem] w-80 rounded-2xl bg-gradient-to-b from-[#232a34] to-[#171e28] p-6 lg:h-[26rem] lg:w-96 lg:p-7">
      {children}
    </div>
  );
};

export default Container;
