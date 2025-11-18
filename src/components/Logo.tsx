import Image from 'next/image';
export default function Logo(){
  return <Image src="/logo.png" alt="logo" width={40} height={40} sizes="(max-width: 640px) 40px, 64px" />
}