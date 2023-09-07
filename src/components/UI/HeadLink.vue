<template>
    <a href="#" class="link">
        <slot></slot>
    </a>
      </template>
      
<script>
    export default {
    name: 'head-link'
}
</script>
      
<style scoped>
.link{
  display: flex;
  padding: 10px 35px;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  font-family: Nunito;
  font-size: 14px;
  background: #FFFFFF;
  border: 1px solid #D4D4D4;
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  width: 180px;
}
.link:hover{
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>