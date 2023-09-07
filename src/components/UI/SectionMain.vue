<template>
    <section>
        <div class="block">
        <slot></slot>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'section-main'
}
</script>
    
<style scoped>
section {
  flex: 1;
  /* occupe la hauteur restante  */
  margin-left: 20%;
}

section p {
  margin-bottom: 32px;
  text-align: justify;
}
.block {
  display: flex;
  justify-content: space-between;
  max-width: calc(100% - 32%);
  width: 100%;
  flex-wrap: wrap;
}

</style>