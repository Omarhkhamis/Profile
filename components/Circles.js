import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] absolute -right-16 -bottom-2 rotate-2 mix-blend-color-dodge animate-pulse duration-75 z-10 marker:">
      <Image
        src={"/circles.png"}
        width={130}
        height={100}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
