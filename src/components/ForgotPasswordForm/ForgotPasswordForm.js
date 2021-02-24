import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import Input from '../Input'
import Button from '../Button'

const ForgotPasswordForm = ({ className }) => {
  const { t } = useTranslation()
  const classNames = cx('forgot-password-form', className)
  const history = useHistory()
  const [email, setEmail] = useState('')

  return (
    <div className={classNames}>
      <Input
        label={t('forgot_password:email')}
        value={email}
        placeholder={t('forgot_password:email_placeholder')}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Button
        className="continue-button"
        disabled={!email.trim().length}
      >
        {t('forgot_password:continue')}
      </Button>

      <Button
        outline
        onClick={() => history.push('/login')}
      >
        {t('forgot_password:cancel')}
      </Button>
    </div>
  )
}

export default ForgotPasswordForm
