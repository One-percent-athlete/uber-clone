import React from 'react'
import { KeyboardAvoidingView, TextInput } from "react-native"

const InputField = () => (
  <KeyboardAvoidingView>
    <TextInput
      placeholder="Email"
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
    />
  </KeyboardAvoidingView>
)

export default InputField