import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../../components/LanguageSwitch'
import RapsodoLogo from '../../components/RapsodoLogo'
import LoginForm from '../../components/LoginForm'

const Login = () => {
  const { t } = useTranslation()

  return (
    <div className="login-view">
      <div className="box">
        <LanguageSwitch />

        <div className="view-header">
          <RapsodoLogo className="rapsodo-logo" />

          <div className="view-title">
            <div>{t('general:app_name')}</div>
            <div>{t('login:create_account')}</div>
          </div>
        </div>

        <div className="players-image" />

        <LoginForm />
      </div>
    </div>
  )
}

export default Login
