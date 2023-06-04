/// <reference types="react" />
import { TextFieldProps } from '@mui/material/TextField';
export default function Input({ error, onEnter, ...textFieldProps }: Omit<TextFieldProps, 'error'> & {
    error?: string;
    onEnter?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
}): import("react/jsx-runtime").JSX.Element;
