import React from 'react'
import { FormHelperText } from '@mui/material'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function Checkbox({ value, name, error, children, maxWidth, ...otherProps }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'dangerouslySetInnerHTML'> & React.PropsWithChildren<{ 
  value: boolean
  name: string
  error: string | undefined
  maxWidth?: number
}>) {
  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.checkbox}>
        <label htmlFor={name} style={{ maxWidth }}>
          <input type='checkbox' id={name} defaultChecked={value} {...otherProps}></input>
          <span></span>
          <div className={cx({ [styles.errorLabel]: error })}>{children}</div>
        </label>
      </div>
      {error !== undefined && <FormHelperText error className={styles.error}>{error}</FormHelperText>}
    </div>
  )
}
