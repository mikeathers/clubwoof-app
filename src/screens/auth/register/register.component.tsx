import {Formik} from 'formik'
import React from 'react'
import {SafeAreaView} from 'react-native'

import {Button, TextInput} from '@/components'
import {formSchema} from '@/screens/auth/register/register.helpers'

import {Container, Error, FormContent, Heading, RegisterImage} from './register.styles'

interface RegisterComponentProps {
  i18n: i18nRegisterScreen
  handleSubmitForm: (data: FormDetails) => Promise<void>
  error: Error | null | undefined
  isLoading: boolean
}

export const RegisterComponent: React.FC<RegisterComponentProps> = (props) => {
  const {i18n, handleSubmitForm, isLoading, error} = props

  return (
    <Container>
      <RegisterImage source={require('./assets/waving-dog.png')} />
      <Formik
        initialValues={{emailAddress: '', password: '', confirmPassword: ''}}
        onSubmit={(values) => handleSubmitForm(values)}
        validationSchema={formSchema(i18n)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({handleChange, handleBlur, handleSubmit, values, errors}) => {
          return (
            <FormContent>
              <Heading>Create an account</Heading>
              <TextInput
                name={'emailAddress'}
                placeholder={i18n.inputs.email.placeholder}
                label={i18n.inputs.email.label}
                keyboardType="email-address"
                onChangeText={handleChange('emailAddress')}
                onBlur={handleBlur('emailAddress')}
                value={values.emailAddress}
                error={errors.emailAddress}
              />
              <TextInput
                name={'password'}
                placeholder={i18n.inputs.password.placeholder}
                label={i18n.inputs.password.label}
                secureTextEntry
                textContentType="newPassword"
                keyboardType="default"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
              />
              <TextInput
                name={'confirmPassword'}
                placeholder={i18n.inputs.confirmPassword.placeholder}
                label={i18n.inputs.confirmPassword.label}
                secureTextEntry
                textContentType="newPassword"
                keyboardType="default"
                marginBottom="space3x"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={errors.confirmPassword}
              />
              {error && <Error>{`${error.message}`}</Error>}
              <SafeAreaView>
                <Button
                  loading={isLoading}
                  disabled={isLoading}
                  onPress={() => handleSubmit()}
                >
                  {i18n.submitButton}
                </Button>
              </SafeAreaView>
            </FormContent>
          )
        }}
      </Formik>
    </Container>
  )
}
