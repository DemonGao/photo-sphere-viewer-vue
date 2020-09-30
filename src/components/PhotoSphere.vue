<template>
  <!-- <img v-if="imgBase64" v-show="false" ref="imageRef" id="image" :src="imgBase64" alt="test" @load="onloadImg"/> -->
  <div id="viewer"></div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
// 外链方式:
// import toBase64 from './../utils/toBase64'
import { Viewer } from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
export default {
  setup() {
    // 外链方式:
    // const imgBase64 = ref(null)
    const psViewer = ref(null)
    const imageRef = ref(null) // 对元素使用ref 这么简单...
    const onloadImg = () => {
      psViewer.value = new Viewer({
        container: document.querySelector('#viewer'),
        // 外链方式:
        // panorama: imageRef.value.src
        panorama: require('../assets/1-2.jpg')
      })
    }
    
    onMounted(async () => {
      onloadImg()

      // 外链方式:
      // imgBase64.value = await toBase64('https://...../1-2.jpg')
    })

    return {
      // imgBase64,
      onloadImg,
      imageRef,
      psViewer
    }
  },
}
</script>

<style scoped>
#viewer{
  width: 100vh;;
  height: 50vh;
}
</style>