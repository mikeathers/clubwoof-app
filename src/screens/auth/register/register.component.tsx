import {useNavigation} from '@react-navigation/native'
import {Formik} from 'formik'
import React from 'react'
import {KeyboardAvoidingView, SafeAreaView} from 'react-native'

import {Button, TextInput} from '@/components'

import {formSchema} from './register.helpers'
import {
  Container,
  ErrorText,
  FormContent,
  GoToLoginAction,
  GoToLoginContainer,
  GoToLoginText,
  Heading,
  RegisterImage,
} from './register.styles'

interface RegisterComponentProps {
  i18n: i18nRegisterScreen
  handleSubmitForm: (data: FormDetails) => Promise<void>
  error: Error | null | undefined
  isLoading: boolean
}

export const RegisterComponent: React.FC<RegisterComponentProps> = (props) => {
  const {i18n, handleSubmitForm, isLoading, error} = props
  const {navigate} = useNavigation<Navigate>()
  return (
    <Container>
      <KeyboardAvoidingView behavior="position">
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
                {error && <ErrorText>{`${error.message}`}</ErrorText>}
                <SafeAreaView>
                  <Button
                    loading={isLoading}
                    disabled={isLoading}
                    onPress={() => handleSubmit()}
                  >
                    {i18n.submitButton}
                  </Button>
                  <GoToLoginContainer>
                    <GoToLoginText>{i18n.signIn}</GoToLoginText>
                    <GoToLoginAction onPress={() => navigate('SignIn')}>
                      {i18n.signInAction}
                    </GoToLoginAction>
                  </GoToLoginContainer>
                </SafeAreaView>
              </FormContent>
            )
          }}
        </Formik>
      </KeyboardAvoidingView>
    </Container>
  )
}
