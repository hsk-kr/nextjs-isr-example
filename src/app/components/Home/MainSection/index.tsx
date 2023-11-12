import Image from 'next/image';

export default function MainSection() {
  return (
    <div className="h-screen flex justify-center items-center bg-black relative">
      <Image
        src="/earth.png"
        alt="earth"
        width={256}
        height={256}
        className="animate-infinite-rotate absolute left-1/2 top-1/2 w-48 h-48 md:w-64 md:h-64 opacity-70"
        style={{
          translate: '-50% -50%',
        }}
      />
      <div className="z-[1] p-4 flex flex-col gap-4">
        <h1 className="text-white text-center font-bold text-3xl md:text-5xl w-8/12 mx-auto animate-fadein">
          Learning Language makes you a better person
        </h1>
        <p className="text-white text-center text-xl animate-fadein">
          Communicate with the world
        </p>
      </div>
    </div>
  );
}
