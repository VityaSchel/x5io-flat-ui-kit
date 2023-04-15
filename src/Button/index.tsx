import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button({ variant = 'contained', className, children, ...props }: React.PropsWithChildren<{
  variant?: 'contained',
  className?: cx.ArgumentArray
}>) {
  return (
    <button
      {...props}
      className={cx(styles.button, {
        [styles.contained]: variant === 'contained'
      }, className)}
    >
      {children}
    </button>
  )
}