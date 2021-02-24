import { useTranslation } from 'react-i18next'
import cx from 'classnames'

const Agreements = ({
  className,
  ...props
}) => {
  const { t } = useTranslation()
  const classNames = cx('ra-agreements', className)

  return (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: t('login:agreements', {interpolation: {escapeValue: false}}) }}
    />
  )
}

export default Agreements
