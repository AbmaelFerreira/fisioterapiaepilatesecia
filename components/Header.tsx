import Link from "next/link";
import { Icon, IconName } from "./icons";

export function Header({
    title, 
    href, 
    children,
    iconName,
    iconClassName,
}: Readonly<{
    title?:string; 
    href:string; 
    children?: React.ReactNode;
    iconName?: IconName;
    iconClassName?: string;
}>) {
    const iconNameFallback = iconName ?? 'arrow-left';
    const classNameDefault = 'flex w-full gap-5 items-center';

    return (
        <div 
            className={`${classNameDefault} ${children ? 'justify-between' : null}`}
        >
              {children || null }

            <Link 
                href={href} 

                className="h-10 w-10 flex items-center justify-center border border-slate-400 rounded-full hover:bg-slate-100 transition-all ">

                <Icon name={iconNameFallback} className={`w-3 h-3 text-[#9FAF95] ${iconClassName}`}
            />

            </Link>

            {!children ?
                 <div className="text-xl font-semibold">
                    {title}
                </div> : null
            }

        </div>
    )
}