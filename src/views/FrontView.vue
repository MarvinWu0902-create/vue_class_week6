<template>
    <div>
        <h2 class="text-center p-3">這是前台</h2>
        <nav class="d-flex justify-content-center">
            <RouterLink class="px-3" to="/">回到首頁</RouterLink>
            <RouterLink class="px-3" to="/productlist">產品列表</RouterLink>
            <RouterLink class="px-3" to="/login">登入後台</RouterLink>
        </nav>
        <RouterView></RouterView>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.active{
  color: green;
}
</style>
