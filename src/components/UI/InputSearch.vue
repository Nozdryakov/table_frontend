<template>
<input type="text">
  </template>
  
  <script>
  export default {
  name: 'input-search'
  }
  </script>
  
  <style scoped>
  input{
  max-width: 550px;
  width: 100%;

  padding: 10px 15px;
  font-size: 16px;

  font-family: Nunito;
  background: #FFFFFF;
  border: 1px solid #D4D4D4;
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  outline: none;
}
  @media (max-width: 1179px) {
    input{
      max-width: 100%;
    }
  }
  </style>