import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import { useToasts } from 'react-toast-notifications'
import fetchHelper from '../../utils/fetch-helper'
import Input from '../Input'
import Button from '../Button'
import Agreements from '../Agreements'

const LoginForm = ({ className }) => {
  const { t } = useTranslation()
  const { addToast } = useToasts()
  const classNames = cx('login-form', className)
  const history = useHistory()
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clearFormValues = () => {
    setEmail('')
    setPassword('')
  }

  const handleLoginButtonClick = async () => {
    if (isLoading) return

    setLoading(true)
    try {
      const response = await fetchHelper({
        url: 'login',
        method: 'POST',
        body: {
          email: email.trim(),
          password: password.trim(),
        },
      })
      // eslint-disable-next-line no-console
      console.log({ response })
      addToast(t('login:correct_credentials', { email }), {
        appearance: 'success',
        autoDismiss: true,
      })
      clearFormValues()
    } catch (error) {
      addToast(t('login:invalid_credentials'), {
        appearance: 'error',
        autoDismiss: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classNames}>
      <Input
        data-testid="email-input-test"
        label={t('login:email')}
        value={email}
        placeholder={t('login:email_placeholder')}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        type="password"
        className="password-input"
        data-testid="password-input-test"
        label={t('login:password')}
        value={password}
        placeholder={t('login:password_placeholder')}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button
        type="text"
        className="forgot-password-button"
        data-testid="forgot-password-button-test"
        onClick={() => history.push('/forgot-password')}
      >
        {t('login:forgot_password')}
      </Button>

      <Agreements className="mobile-view" />

      <Button
        data-testid="signin-button-test"
        disabled={!(email.trim().length && password.trim().length)}
        onClick={() => handleLoginButtonClick()}
      >
        {t('login:sign_in')}
      </Button>

      <Button
        outline
        data-testid="signup-button-test"
      >
        {t('login:sign_up')}
      </Button>

      <Agreements className="web-view" />

    </div>
  )
}

export default LoginForm
