<template>
    <div class="container-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'box-menu'
}
</script>

<style scoped>
.container-box{
    margin: 0 40px 15px 90px;
    display: flex;
    flex-direction: column;
}
@media (max-width: 1024px) {
  .container-box {
    margin: 0 20px 5px 10px;
  }

}
@media (max-width: 870px) {
  .container-box{
    width: 575px;
  }
}
</style>