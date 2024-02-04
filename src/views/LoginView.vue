<template>
    <div>
        <div id="login">
        <div class="container">
            <div class="row justify-content-center">
                <h1 class="h3 mb-3 font-weight-normal">
                    請先登入
                </h1>
                <div class="col-8">
                    <form id="form" class="form-signin">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="username" placeholder="name@example.com"
                                v-model="email" required autofocus>
                            <label for="username">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Password" required
                                @keyup.enter="loginHandler()" v-model="passWord">
                            <label for="password">Password</label>
                        </div>
                        <button :class="{ 'cursor-wait': isLoading,'cursor-default':!isLoading }"
                            class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="loginHandler()">
                            登入
                        </button>
                    </form>
                </div>
            </div>
            <p class="mt-5 mb-3 text-muted">
                &copy; 2021~∞ - 六角學院
            </p>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      email: '',
      passWord: '',
      isAllowLogin: false,
      isLoading: false
    }
  },
  methods: {

    loginHandler () {
      this.isLoading = true

      axios.post(`${VITE_URL}/admin/signin`, {
        username: this.email,
        password: this.passWord
      })
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexVueToken=${token};expires=${new Date(expired)};path=/;`
          return this.$router.push('/admin')
        })
        .catch(() => {
          this.isLoading = false
          alert('帳號密碼錯誤!')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
