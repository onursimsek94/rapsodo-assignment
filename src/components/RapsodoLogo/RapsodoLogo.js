
import cx from 'classnames'
import rapsodoLogoLight from '../../assets/images/rapsodo-logo-light.png'
import rapsodoLogoDark from '../../assets/images/rapsodo-logo-dark.png'

const RapsodoLogo = ({
  className,
  ...props
}) => {
  const classNames = cx('ra-logo', className)

  return (
    <>
      <img
        className={cx('light-logo', classNames)}
        src={rapsodoLogoLight}
        alt="rapsodo-logo"
      />
      <img
        className={cx('dark-logo', classNames)}
        src={rapsodoLogoDark}
        alt="rapsodo-logo"
      />
    </>
  )
}

export default RapsodoLogo
