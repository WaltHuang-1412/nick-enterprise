<template lang="pug">
.login-wrapper
  .login-container
    .login
      .login-title
        h1 小工具登入
      .login-content
        a-form(:model='formState' name='normal_login' @finish='onFinish' @finishfailed='onFinishFailed' layout="vertical")
          a-form-item(label='Username' name='username' :rules="[{ required: true, message: 'Please input your username!' }]")
            a-input(v-model:value='formState.username' placeholder='Username')
              template(#prefix='')
                UserOutlined(style='color: rgba(0, 0, 0, 0.25)')

          a-form-item(label='Password' name='password' :rules="[{ required: true, message: 'Please input your password!' }]")
            a-input(v-model:value='formState.password' type='password' placeholder='Password')
              template(#prefix='')
                LockOutlined(style='color: rgba(0, 0, 0, 0.25)')
          a-form-item
            a-button.login-form-button(type='primary' html-type='submit' block) Log in
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const router = useRouter()
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    })

    const onFinish = (values: any) => {
      console.log('Success:', values)
      router.push({ name: 'home' })
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
  text-align: center

  &:before
    content: ''
    display: inline-block
    height: 100%
    width: 0
    vertical-align: middle

.login
  width: 340px
  display: inline-block
  vertical-align: middle

.login-content
  background-color: #f6f8fa
  border: 1px solid hsla(210,18%,87%,1)
  padding: 20px
  border-radius: 5px
</style>
