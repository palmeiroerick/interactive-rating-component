type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-2xl font-bold text-white lg:text-3xl">{children}</h1>
  );
};

export default Title;
