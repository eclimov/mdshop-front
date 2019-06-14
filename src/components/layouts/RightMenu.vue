<template>
  <div class="right-part">
    <Currency />
  </div>
</template>

<script>
  import Progress from "@/components/Progress";
  import Currency from "@/components/Currency";
  export default {
    name: 'RightMenu',
    components: {Currency, Progress},
  }
</script>

<style  lang="scss" scoped>
  .right-part{
    margin:10px
  }
</style>
