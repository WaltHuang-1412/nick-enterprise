<template lang="pug">
.login-wrapper
  .login-container
    .login
      .login-title 小工具登入
      .login-content
        a-form(:model='formState' name='normal_login' @finish='onFinish' @finishfailed='onFinishFailed')
          a-form-item(label='Username' name='username' :rules="[{ required: true, message: 'Please input your username!' }]")
            a-input(v-model:value='formState.username')
          a-form-item(label='Password' name='password' :rules="[{ required: true, message: 'Please input your password!' }]")
            a-input-password(v-model:value='formState.password')
          a-form-item
            a-button.login-form-button(:disabled='disabled' type='primary' html-type='submit') Log in
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  name: 'Login',
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    })
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const disabled = computed(() => {
      return !(formState.username && formState.password)
    })
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled
    }
  }
})
</script>
<style lang="sass">
.login-wrapper
  width: 100%
  height: 100%
.login-container
  max-width: 1200px
  height: 100%
  margin: 0 auto
  padding-top: 50px

.login
  width: 340px
  margin: 0 auto

.login-title
  font-size: 1rem
</style>
