<template>
 <div>
   <HeaderView/>
   <hr>
   <router-view></router-view>
 </div>
</template>

<script>



import HeaderView from "@/components/pages/HeaderView";
export default {
  name: 'App',
  components: {HeaderView},
}
</script>

<style scoped>

</style>
