import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center items-center absolute left-0 top-0 w-screen h-screen z-50 bg-white">
      <Image
        className="animate-spin w-20 h-20 bg-slate-800"
        src="/language.svg"
        width={24}
        height={24}
        alt="loading"
      />
    </div>
  );
}
