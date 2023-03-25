import { FormHelperText } from '@mui/material'
import styles from './styles.module.scss'

export default function Checkbox(props: Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'value'
> & { value: boolean, name: string, error: string | undefined, children: React.ReactNode }) {
  const { children, value, ...otherProps } = props

  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.checkbox}>
        <label htmlFor={props.name} >
          <input type='checkbox' id={props.name} defaultChecked={value} {...otherProps}></input>
          <span></span>
          <div >{children}</div>
        </label>
      </div>
      {props.error && <FormHelperText error className={styles.error}>{props.error}</FormHelperText>}
    </div>
  )
}