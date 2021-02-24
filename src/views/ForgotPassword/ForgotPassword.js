import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../../components/LanguageSwitch'
import RapsodoLogo from '../../components/RapsodoLogo'
import ForgotPasswordForm from '../../components/ForgotPasswordForm'

const ForgotPassword = () => {
  const { t } = useTranslation()

  return (
    <div className="forgot-password-view">
      <div className="box">
        <LanguageSwitch />

        <div className="view-header">
          <RapsodoLogo className="rapsodo-logo" />

          <div className="view-title">
            <div>{t('general:app_name')}</div>
            <div>{t('forgot_password:forgot_password')}</div>
            <div>{t('forgot_password:enter_email')}</div>
          </div>
        </div>

        <div className="players-image" />

        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPassword
