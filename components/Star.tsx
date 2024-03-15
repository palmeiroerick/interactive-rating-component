import Image from "next/image";

const Star = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-darkBlue lg:h-12 lg:w-12">
      <Image src="/icon-star.svg" alt="start" width={17} height={16} />
    </div>
  );
};

export default Star;
