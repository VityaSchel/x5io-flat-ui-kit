import MUIButton, { ButtonProps } from '@mui/material/Button'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button(props: ButtonProps) {
  return (
    <MUIButton variant='contained' {...props} className={cx(styles.button, props.className)} />
  )
}