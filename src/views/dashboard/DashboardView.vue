<template>
  <div>
      <h2 class="text-center p-3">這是後台</h2>
      <nav class="d-flex justify-content-center">
          <RouterLink class="px-3" to="/">回到前台</RouterLink>
          <RouterLink class="px-3" to="/admin/productlist">管理產品列表</RouterLink>
          <RouterLink class="px-3" to="/admin/addproduct">新增產品</RouterLink>
      </nav>
      <RouterView></RouterView>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {

    }
  },
  methods: {
    setHeaderToken () {
      const token = document.cookie.split('; ')
        .find((row) => row.startsWith('hexVueToken='))
        ?.split('=')[1]
      axios.defaults.headers.common.Authorization = token
    },
    checkHandler () {
      axios.post(`${VITE_URL}/api/user/check`, null)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.setHeaderToken()
    this.checkHandler()
  }
}
</script>

<style lang="scss" scoped>
.active{
color: green;
}
</style>
