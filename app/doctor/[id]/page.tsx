import { Header } from "@/components/Header";
import { Icon } from "@/components/icons";
import Image from "next/image";
import { formatHour } from "@/other/helpers";

export default function Doctor({ 
    params,
}: Readonly<{params: { id: string } }>) {

    const doctor = {
        firsName: "Ana Cristina",
        lastName: "Silva",
        speciality: "Traumatortopedia",
        state: "MT",
        city: "Várzea Grande",
        photo: "ana1.png",
        bio: "Fisioterapeuta formado pela UNIVAG, com especialização em Traumatortopedia",
        price: "300,00",
        attendences: 50,
        expecience: "8 anos",
        availability: "Quarta à sexta - 10:00 - 12:00",
        address:" Rua Joaquim de Figueiredo",
        agenda: [
            {
                id: '1',
                date: '2024-06-07T12:00:00.000Z',
                availability: true,
            },
            {
                id: '2',
                date: '2024-06-07T12:14:00.000Z',
                availability: true,
            },
            {
                id: '3',
                date: '2024-06-07T12:15:00.000Z',
                availability: false,
            },
            ,
            {
                id: '4',
                date: '2024-06-07T16:00:00.000Z',
                availability: true,
            },
            ,
            {
                id: '3',
                date: '2024-06-07T18:15:00.000Z',
                availability: true,
            },
        ]

    }

    return(
    <>
        <Header href="/" title="Agenda" iconClassName="w-4 h-4" />
        <div className="flex flex-col gap-5 mt-5">
        <div className="bg-green-700 p-4 rounded-xl text-white flex gap-4">
            <Image 
                src={`/photos/${doctor.photo}`} 
                alt={doctor.firsName}
                width={76}
                height={76}
                className="rounded-xl" 
            />

            <div>
                <h1 className="font-semibold">
                    Dr. {doctor.firsName} {doctor.lastName}
                </h1>
                <p> {doctor.speciality}</p>
                <p> 
                    <Icon name="map" className="w-4 h-4 text-white">
                        {doctor.city},  {doctor.state}
                    </Icon>
                </p>
                
            </div>
        </div>

       
            <p className="p-3 border border-gray-100"> 
                Fisioterapeuta formado pela UNIVAG, com especialização em Traumatortopedia
            </p> 

            <div className="border-b border-b-gray-100 flex justify-center py-2">

                <div className="w-1/2">
                    <h2 className="text-[#9f9f9f]"> Valor Consulta</h2>
                    <p>R${doctor.price}</p>
                </div>

                <div className="w-1/2">
                    <h2 className="text-[#9f9f9f]"> Atendimentos</h2>
                    <p>{doctor.attendences}</p>
                </div>
            </div>


            <div className="border-b border-b-gray-100 flex justify-center py-2">

                <div className="w-1/2">
                    <h2 className="text-[#9f9f9f]"> Formação</h2>
                    <p>Fisioterapeuta</p>
                </div>

                <div className="w-1/2">
                    <h2 className="text-[#9f9f9f]"> Experiência</h2>
                    <p>{doctor.expecience}</p>
                </div>
            </div>


            <div className="border-b border-b-gray-100 flex flex-col justify-center py-2">
                <h2 className="text-[#9f9f9f]"> Disponibilidade</h2>
                <p>{doctor.availability}</p>
            </div>

            <div className="border-b border-b-gray-100 flex  flex-col  justify-center py-2">
                <h2 className="text-[#9f9f9f]"> Localidade </h2>
                <p>
                    {doctor.address}, {doctor.city}, {doctor.state}
                </p>
            </div>

            <h2 className="border border-gray-100 text-center p-3">
                Horários disponíveis
            </h2>
            
            <div className="px-2 flex flex-col gap-5">
                <div className="flex">
                    <div className="w-[90px] h-9 flex items-center font-semibold">
                        Hoje
                    </div>
                    <Agenda agenda={doctor.agenda} />
                </div>

                {/* Desafio fazer um filtro com os dados de amanhã, com meddleware */}
                <div className="flex">
                    <div className="w-[90px] h-9 flex items-center font-semibold">
                        Amanhã
                    </div>
                    <Agenda agenda={doctor.agenda} />
                </div>
            </div>


        </div>
    </>
);
}


type AgendaProps = {
    id: string;
    date: string;
    availability: boolean;
}

function Agenda({ agenda }: { agenda: AgendaProps[]}) {
    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            {agenda.map((item) => (
                <AgendaButton key={item.id} {...item} />
            ))}
        </div>
    );
}

function AgendaButton({
    date, 
    availability
} : {
    date: string, 
    availability: boolean
}) {
    if(!availability) return null;
    return (
        <button className="text-sm font-semibold text-green-700 bg-green-100 rounded-md py-2 px-3 hover:bg-green-200">
            {formatHour(new Date(date))}
        </button>
    );
}
