<template>
  <div>
    <div class="container">
      <div class="d-flex my-3">
        <div class="d-flex flex-column mx-3">
          <div class="mb-3">
            <img class="img-fluid image-object image-main" :src="productionData.imageUrl" alt="productionData.title">
          </div>
          <div class="d-flex justify-content-between">
            <div v-for="(image) of productionData.imagesUrl" :Key="image">
              <img class="img-fluid image-object image-others" :src="image" alt="#">
            </div>
          </div>
        </div>
        <div class="mx-3">
          <h3 class="mb-3">{{ productionData.title }}</h3>
          <p>{{ productionData.description }}</p>
          <p><span class="fs-2 text-danger">${{ productionData.price }}</span>{{' '}}<del>{{ productionData.origin_price
          }}</del>NTD / {{ productionData.unit }}</p>
        </div>

      </div>
    </div>
    <VueLoading :active="isLoading" :can-cancel="true" :is-full-page="fullPage"></VueLoading>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      productionData: [],
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getData () {
      const { id } = this.$route.params
      this.isLoading = true
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          const { product } = res.data

          this.productionData = product
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getData()
  }

}

</script>

<style lang="scss" scoped>
.image {
  &-main {
    width: 410px;
    height: 300px;
  }

  &-others {
    width: 200px;
    height: 150px;
  }
  &-object{
  object-fit:cover;
  object-position:center;
  }

}
</style>
