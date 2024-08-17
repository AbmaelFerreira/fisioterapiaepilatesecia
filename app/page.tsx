import { Header } from '@/components/Header';
import { Icon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      
      <Header href="/sign-in" iconName='arrow-left' iconClassName = 'w-5 h-5'>
        <div className='inline-flex gap-[10px] items-center'>
          <Image 
            src={"/logo-fisiome-fundo-trans.png"} 
            width={48} 
            height={48} 
            alt='Fisioterapia e Pilates' 
          />
          <span className='font-bold text-2xl text-[#9FAF95]'> Fisioterapia & Pilates </span>
        </div>
        
      </Header>


      <h1 className='font-bold text-xl'> 
        Assistente pessoal 
        <span className='w-full flex'> para agendar consultas </span>
      </h1>

      <div className='flex flex-col gap-2'>
        <div className='flex w-full gap-4'>
          
          {/* <div className='bg-green-500 inline-flex p-3 rounded-xl'> */}
          <div className='bg-[#9FAF95] inline-flex p-3 rounded-xl'>
            <div className='text-white font-roboto'>
            <h2 className='font-semibold'>
              Agendamento Hoje
            </h2> 
            <p className='text-sm truncate w-28'>10:00 - Fisioterapia</p>
            </div>
          </div>

          {/* <div className='bg-green-500 inline-flex p-3 rounded-xl'> */}
          <div className='bg-[#9FAF95] inline-flex p-3 rounded-xl'>
            
            <div className='text-white font-roboto'>
            <h2 className='font-semibold'>
              Agendamento Amanhã
            </h2> 
            <p className='text-sm truncate w-28'>10:00 - Fisioterapia</p>
            </div>
          </div>
        </div>

        <div className='inline-flex'>
          <Link 
            href="/sign-in" 
            // className='bg-green-500 text-white text-sm px-2 py-2 pr-3 inline-flex gap-2 items-center rounded-2xl'>
            className='bg-[#9FAF95] text-white text-sm px-2 py-2 pr-3 inline-flex gap-2 items-center rounded-2xl'>
            
            <span className='bg-white text-xs text-green-500 w-5 h-5 font-semibold items-center justify-center flex rounded-full'>
              3
            </span>

            Meus Agendamentos

          </Link>
        </div> 
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg'> 
            Fisioterapeutas disponíveis
          </h2>

          <div className='flex justify-between'>
            <Doctor 
              name="Dr. Ana Cristina" 
              doctorId="1" 
              speciality="Fisioterapia"
              location= "Várzea Grande" 
            />

            <Doctor 
              name="Dr. Viviane" 
              doctorId="2" 
              speciality="Fisioterapia"
              location= "Várzea Grande" 
            />
          </div>
      </div>
    </div>
  );
} 

type DoctorProps = {
  name: string;
  doctorId: string;
  speciality: string;
  location: string;
};

function Doctor({name, doctorId, speciality, location }: Readonly<DoctorProps>) {
    return(
      <Link href={`doctor/${doctorId}`} 
        className='border border-gray-200 p-4 rounded-lg gap-3 inline-flex flex-col w-full max-w-[150px]'>
        <Image 
          src={`/photos/ana-${doctorId}.jpg`} 
          alt={name} 
          width={76} 
          height={76}
          className='rounded-lg'
        />

        <div className='flex flex-col'>

          <h3 className='font-semibold truncate'>{name}</h3>

          <p className='font-roboto text-sm text-gray-400'> {speciality} </p>

        </div>

        <p> 
          <Icon name="map" className='w-4 h-4 text-[#FFBB63]' />
          {location}
        </p>

      </Link>
    );
}
