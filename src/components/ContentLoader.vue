<template>
   <content-loader
        :width="400"
        :height="233"
        :speed="2"
        primaryColor="#f9f6f6"
        secondaryColor="#ecebeb"
      >
        <rect x="150" y="65" rx="0" ry="0" width="1" height="0" />
        <rect x="118" y="3" rx="0" ry="0" width="158" height="39" />
        <rect x="32" y="49" rx="0" ry="0" width="307" height="13" />
        <rect x="133" y="73" rx="0" ry="0" width="123" height="74" />
        <rect x="188" y="41" rx="0" ry="0" width="1" height="1" />
        <rect x="87" y="158" rx="0" ry="0" width="224" height="14" />
        <rect x="195" y="205" rx="0" ry="0" width="0" height="1" />
        <rect x="146" y="183" rx="0" ry="0" width="98" height="57" />
        <rect x="146" y="168" rx="0" ry="0" width="8" height="2" />
      </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader,
  },
};
</script>

<style lang="less" scoped>
</style>