<template>
    <input type="text" class="input" placeholder="Поиск...">
</template>

<script>
export default {
    name: 'my-input'
}
</script>

<style scoped>
.input{
    width: 700px;
    height: 34px;
    font-size: 16px;
    font-family: Nunito;
    margin-right: 50px;
    background: #FFFFFF;
    border: 1px solid #ABABAB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    outline: none;
    padding: 6px 15px;
}
@media (max-width: 1120px) {
  .input{
    width: 450px;
    height: 32px;
    padding: 2px 10px;
    font-size: 14px;
  }
}
@media (max-width: 1024px) {
  .input {
    margin-right: 100px;
    width: 30rem;
  }
  @media (max-width: 440px) {
    .input{
      width: 18rem;
    }
  }
}
</style>