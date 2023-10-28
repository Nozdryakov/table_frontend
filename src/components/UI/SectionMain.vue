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
  margin: 50px 0px 0px calc(20% + 15px);
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
@media (max-width: 1225px) {
section{
  margin: 100px 15px;
  padding: 0;
}
}

</style>