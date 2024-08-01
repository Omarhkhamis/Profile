import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div>
      <Image
        src="/top-left-img.png"
        alt="Top Left Image"
        width={400}
        height={400}
        className="absolute top-0 left-0 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50"
      />
    </div>
  );
};

export default TopLeftImg;
