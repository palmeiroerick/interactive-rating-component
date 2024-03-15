type TextProps = {
  children: string;
  className?: string;
};

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={`${className} text-[13.5px] text-mediumGrey lg:text-[15px]`}>
      {children}
    </p>
  );
};

export default Text;
