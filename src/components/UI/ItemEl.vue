<template>
    <div class="item">
            <ul>
                <slot></slot>
            </ul>
    </div>
</template>
      
<script>
    export default {
    name: 'item-el'
}
</script>
      
<style scoped>
.item {
  border: 1px solid #715ECE;
  width: 45%;
  padding: 20px;
  border-radius: 10px;
  background-color: #f7f7f7; /* Цвет фона */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Небольшая тень */
  margin-bottom: 25px;
}
</style>