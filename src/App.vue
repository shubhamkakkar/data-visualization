<template>
  <div id="app">
    <Header/>
    <hr>
    <FilterOption/>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import FilterOption from '@/components/details.vue';

  export default{
    components : {
      Header,
      FilterOption
    }
  }
</script>

