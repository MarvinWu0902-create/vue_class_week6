<template>
    <div>
        <table class="table align-middle ">
    <thead>
        <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
        </tr>
    </thead>
    <tbody>

        <tr v-for="product of InnerProductData " :key="product.id">
            <td style="width: 200px">
                <div>
                <img style="height: 100px; background-size: cover; background-position: center" :src="product.imageUrl">
                </div>
            </td>
            <td>
                {{product.title}}
            </td>
            <td>
                <del class="h6">原價 {{product.origin_price}} 元</del>
                <div class="h5">現在只要 {{product.price}} 元</div>
            </td>
            <td>
                <div class="btn-group btn-group-sm">
                  <a class="btn btn-outline-primary" @click.prevent="goToProduct(product.id)">查看更多</a>
                </div>
            </td>
        </tr>
    </tbody>
</table>
    </div>
</template>

<script>
export default {
  props: ['productData'],
  data  () {
    return {
      InnerProductData: []
    }
  },
  methods: {
    goToProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  watch: {
    productData () {
      this.InnerProductData = this.productData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
