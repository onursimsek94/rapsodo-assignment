import cx from 'classnames'

const Button = ({
  type = 'default',
  outline,
  className,
  children,
  ...props
}) => {
  const classNames = cx('ra-button', className, { text: type === 'text', outline })

  return (
    <button
      className={classNames}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
