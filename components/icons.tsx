import { type SVGProps } from 'react';
import { type  IconName } from '@/types/name';

export { IconName };
 
type IconProps = Readonly<{
    name: IconName;
    children?: React.ReactNode;
    childrenClassName?: string;

}>

export function Icon({
    name, 
    children, 
    childrenClassName,
    ... props
}: SVGProps<SVGSVGElement> & IconProps) {

    if(children) {
        // return icon with children/text
       return( 
       <span className={`inline-flex items-center gap-1 ${childrenClassName}`}>
            <Icon name={name} {...props} />

            {children}

        </span>
       );
    }

    return(
        <svg {...props}>
            <use href={`./sprite.svg#${name}`}/>
        </svg>
    );
}