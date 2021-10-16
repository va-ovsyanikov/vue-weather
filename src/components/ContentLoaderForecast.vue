<template>
  <content-loader
    :width="400"
    :height="315"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="27" y="17" rx="0" ry="0" width="0" height="1" />
    <rect x="129" y="6" rx="0" ry="0" width="146" height="79" />
    <rect x="2" y="107" rx="0" ry="0" width="149" height="20" />
    <rect x="174" y="108" rx="0" ry="0" width="49" height="20" />
    <rect x="245" y="111" rx="0" ry="0" width="143" height="20" />
    <rect x="249" y="293" rx="0" ry="0" width="149" height="20" />
    <rect x="247" y="243" rx="0" ry="0" width="149" height="20" />
    <rect x="249" y="196" rx="0" ry="0" width="149" height="20" />
    <rect x="248" y="153" rx="0" ry="0" width="149" height="20" />
    <rect x="3" y="149" rx="0" ry="0" width="149" height="20" />
    <rect x="4" y="197" rx="0" ry="0" width="149" height="20" />
    <rect x="3" y="244" rx="0" ry="0" width="149" height="20" />
    <rect x="1" y="290" rx="0" ry="0" width="149" height="20" />
    <rect x="174" y="151" rx="0" ry="0" width="49" height="20" />
    <rect x="176" y="198" rx="0" ry="0" width="49" height="20" />
    <rect x="178" y="244" rx="0" ry="0" width="49" height="20" />
    <rect x="177" y="291" rx="0" ry="0" width="49" height="20" />
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