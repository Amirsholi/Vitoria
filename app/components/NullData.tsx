import Image from "next/image";

interface NullDataProps {
  title: string;
}

const NullData: React.FC<NullDataProps> = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-xl md:text-2xl mt-8">
      <p className="font-medium">{title}</p>
    <div>
      <Image
            width={650}
            height={650}
            src="/acceso-negado.png"
            alt="Ups"
          />
      </div>
    </div>
  );
};

export default NullData;
