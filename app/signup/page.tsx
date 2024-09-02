import { Field } from "@/components/Form";
import { Header } from "@/components/Header";
import { Button } from "@/components/button";
import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <Header href="/" title='Criar conta' iconClassName="w-4 h-4"/>
            
            <div className="py-5">
                <h1 className="font-bold text-xl">Crie sua conta</h1>
                <p> Por favor, informe seu nome e uma senha para criar sua conta.. </p>

            </div>

            <div className="flex flex-col gap-4">

                <Field 

                    labelProps={{
                        children: 'Nome',
                    }}

                    inputProps={{
                        placeholder: "Informe seu nome",
                        type: 'text',
                        defaultValue: '',
                        autoFocus: true,
                        
                    }} 
                />
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

                <Button className="mb-8"> Criar conta </Button>
            </div>

            <div className="flex flex-col justify-center items-center">
                
                <p>
                    Já está cadastrado? 
                    <Link href="/sign-in" className="text-green-600 font-semibold underline"> 
                        Acesse sua conta
                    </Link>
                </p>
            </div> 
            
        </> 
    )
}