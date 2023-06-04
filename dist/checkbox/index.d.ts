import React from 'react';
export default function Checkbox({ value, name, error, children, maxWidth, ...otherProps }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'dangerouslySetInnerHTML'> & React.PropsWithChildren<{
    value: boolean;
    name: string;
    error: string | undefined;
    maxWidth?: number;
}>): import("react/jsx-runtime").JSX.Element;
