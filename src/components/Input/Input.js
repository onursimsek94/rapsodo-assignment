import cx from 'classnames'
import Label from '../Label'

const Input = ({
  className,
  label,
  ...props
}) => {
  const classNames = cx('ra-input', className)

  return (
    <div className={classNames}>
      {label && (
        <Label>{label}</Label>
      )}

      <input {...props} />
    </div>
  )
}

export default Input
