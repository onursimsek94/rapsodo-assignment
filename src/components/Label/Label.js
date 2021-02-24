import cx from 'classnames'

const Label = ({
  children,
  className,
  ...props
}) => {
  const classNames = cx('ra-label', className)

  return (
    <div
      className={classNames}
      {...props}
    >
      {children}
    </div>
  )
}

export default Label
