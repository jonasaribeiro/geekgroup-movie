import { FieldError } from 'react-hook-form';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import { StyledInput } from './style.styled';

export type TInputProps = {
    label: string;
    id: string;
    type: 'text' | 'email' | 'password';
    placeholder: string;
    error?: FieldError;
    register: UseFormRegisterReturn<string>;
};
export const Input = ({
    label,
    id,
    type,
    error,
    placeholder,
    register,
}: TInputProps) => {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <p> {error.message} </p>}
        </StyledInput>
    );
};
