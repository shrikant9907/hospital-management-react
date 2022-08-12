import React from 'react'
import ForgotPasswordForm from '../components/common/Form/ForgotPasswordForm'
import AuthPageLayout from '../_layouts/AuthPageLayout'

const ForgotPasswordPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Hospital Management System">
        <ForgotPasswordForm title="Forgot Password" />
      </AuthPageLayout>
    </React.Fragment>
  )
}

export default ForgotPasswordPage