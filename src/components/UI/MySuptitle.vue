<template>
    <div class="suptitle">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: 'my-suptitle'
}
</script>

<style scoped>
.suptitle {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    text-transform: capitalize;
}
@media (max-width: 1120px) {
  .suptitle{
    font-size: 16px;
  }
}
</style>