import { Header } from '@/components/Header';
import { Icon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header title="Home" href="/sign-in" iconName='arrow-left' iconClassName = 'w-4 h-4'  >
        <Image 
          src={"/logo-doctorme.png"} 
          width={48} 
          height={48} 
          alt='Imagem' 
        />
      </Header>

      <h1> Home</h1>
      <Link href="/sign-in">Login</Link>
      <Icon name='appointment' className='w-3 h-3 text-red-400' />
      
      {/* <Icon 
        name='eye-on' 
        className='w-4 h-6 text-red-400' 
        childrenClassName='text-sm text-red-400'>
        Aberto
      </Icon> */}

    </>
  );
}
