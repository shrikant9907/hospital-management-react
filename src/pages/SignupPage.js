import React from 'react'
import SignupForm from '../components/common/Form/SignupForm' 
import AuthPageLayout from '../_layouts/AuthPageLayout'

const SignupPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Hospital Management System">
        <SignupForm title="User Registration" />
      </AuthPageLayout>
    </React.Fragment>
  )
}
 

export default SignupPage