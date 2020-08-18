<template>
  <div>
Child1
  </div>
</template>

<script lang="ts">
export default {

  data(){
    return {
      name: 'Child1'
    }
  },
  created(){
    this.time = new Date()
    console.log(`${this.name}出生了`);
  },
  beforeDestroy() {
    const now = new Date()
    console.log(`${this.name}死亡了,共生存了${now - this.time}ms`);

  }
}


</script>

<style lang="scss" scoped>

</style>