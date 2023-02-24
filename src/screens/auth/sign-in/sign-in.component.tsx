import {useNavigation} from '@react-navigation/native'
import {Formik} from 'formik'
import React from 'react'
import {SafeAreaView} from 'react-native'

import {Button, TextInput} from '@/components'

import {formSchema} from './sign-in.helpers'
import {
  Container,
  CTAAction,
  CTAText,
  CTATextContainer,
  ErrorText,
  FormContent,
  HeaderImage,
  Heading,
} from './sign-in.styles'

interface SignInComponentProps {
  i18n: i18nSignInScreen
  handleSubmitForm: (data: FormDetails) => Promise<void>
  error: Error | null | undefined
  isLoading: boolean
}

export const SignInComponent: React.FC<SignInComponentProps> = (props) => {
  const {i18n, handleSubmitForm, isLoading, error} = props
  const {navigate} = useNavigation<Navigate>()
  return (
    <Container>
      <HeaderImage source={require('./assets/dog-on-walk.png')} />
      <Formik
        initialValues={{emailAddress: '', password: ''}}
        onSubmit={(values) => handleSubmitForm(values)}
        validationSchema={formSchema(i18n)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({handleChange, handleBlur, handleSubmit, values, errors}) => {
          // @ts-ignore
          return (
            <FormContent>
              <SafeAreaView>
                <Heading>Sign in</Heading>
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

                {error && <ErrorText>{`${error.message}`}</ErrorText>}
                <Button
                  loading={isLoading}
                  disabled={isLoading}
                  onPress={() => handleSubmit()}
                >
                  {i18n.submitButton}
                </Button>
                <CTATextContainer>
                  <CTAText>{i18n.signUp}</CTAText>
                  <CTAAction
                    onPress={() => {
                      navigate('Register')
                    }}
                  >
                    {i18n.signUpAction}
                  </CTAAction>
                </CTATextContainer>
                <CTATextContainer>
                  <CTAText>{i18n.forgotYourPassword}</CTAText>
                  <CTAAction
                    onPress={() => {
                      navigate('Register')
                    }}
                  >
                    {i18n.forgotYourPasswordAction}
                  </CTAAction>
                </CTATextContainer>
              </SafeAreaView>
            </FormContent>
          )
        }}
      </Formik>
    </Container>
  )
}
