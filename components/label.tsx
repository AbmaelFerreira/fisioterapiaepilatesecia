import {HTMLAttributes, forwardRef } from 'react';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement>{}

// component de label  declarar como função de alta ordem
const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ children,  ...props }, ref) => {
    return (
            <label ref={ref}  {...props}> 
                { children } 
            </label>
    );
  }
);

Label.displayName = 'Label'

export { Label };