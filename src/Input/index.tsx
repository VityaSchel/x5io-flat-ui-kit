// import React from 'react'
import styles from './styles.module.scss'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { FormHelperText } from '@mui/material'

export default function Input({ error, onEnter, ...textFieldProps }: Omit<TextFieldProps, 'error'> & { 
  error?: string
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => any
}) {
  return (
    <div className={styles.input}>
      <TextField
        variant='filled'
        InputLabelProps={{ shrink: true }}
        inputProps={{
          onKeyDown: e => {
            if(e.key === 'Enter') {
              onEnter?.(e)
            }
          }
        }}
        className={styles.textField}
        error={Boolean(error)}
        {...textFieldProps}
      />
      {error && (
        <div className={styles.error}>
          <FormHelperText error>{error}</FormHelperText>
        </div>
      )}
    </div>
  )
}
