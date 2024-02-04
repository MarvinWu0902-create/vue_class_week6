<template>
  <div>
    <ProductListTable :product-data="productionData"></ProductListTable>
    <VueLoading :active="isLoading" :can-cancel="true" :is-full-page="fullPage"></VueLoading>
  </div>
</template>

<script>
import axios from 'axios'
import ProductListTable from '../components/productlist/ProductListTable.vue'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      productionData: [],
      fullPage: true,
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products`)
        .then((res) => {
          const { products } = res.data

          this.productionData = products
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  components: {
    ProductListTable
  },
  mounted () {
    this.getProduct()
  }
}

</script>

<style lang="scss" scoped></style>
