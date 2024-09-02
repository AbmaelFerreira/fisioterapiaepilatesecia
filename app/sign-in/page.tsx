import { Field } from "@/components/Form";
import { Header } from "@/components/Header";
import { Button } from "@/components/button";
import Link from "next/link";

export default function SignIn() {
    return (
        <>
            <Header href="/" title='Login' iconClassName="w-4 h-4"/>
            
            <div className="py-5">
                <h1 className="font-bold text-xl">Acesse sua conta</h1>
                <p> Olá, Informe seus dados para cessar</p>

            </div>

            <div className="flex flex-col gap-4">
                <Field 

                    labelProps={{
                        children: 'Telefone',
                    }}

                    inputProps={{
                        placeholder: "Informe seu numero de telefone",
                        type: 'text',
                        defaultValue: '',
                        autoFocus: true,
                        
                    }} 

                    
                />

                <Field 

                    labelProps={{
                        children: 'Senha',
                    }}

                    inputProps={{
                        placeholder: "Informe sua senha",
                        type: 'password',
                        defaultValue: '',
                        autoFocus: true,
                        className: 'mb-2',
                    }} 
                />

                <Button className="mb-8"> Login </Button>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex h-6 relative w-full items-center justify-center mb-4 ">
                    <span className="absolute z-10 m-auto bg-white px-2">Ou</span>
                    <div className="border-b border-b-gray-100 w-full absolute text-sm"></div>
                </div>
                <p>
                    Não está cadastrado? <Link href="/signup" className="text-green-600 font-semibold underline"> Crie sua conta</Link>
                </p>
            </div> 
            
        </> 
    )
}