<template>
  <header class="header__body">
    <div class="color__back">
      <div class="fon"></div>
      <div class="title">Начальники</div>
    </div>
    <nav class="header__menu">
      <ul>
        <li><input-search/></li>
        <li><head-link>Фильтры</head-link></li>
      </ul>

      <ul>
        <li><head-link>Добавить запись</head-link></li>
        <li class="dropdown">
          <head-link>Учетная запись</head-link>
          <ul class="dropdown-content">
            <head-link @click.prevent="logout">Выход</head-link>
          </ul>
        </li>
      </ul>

    </nav>
  </header>

  <main-content>

  <aside-menu/>
<section-main>
  <div v-if="isLoading">Загрузка...</div>
  <item-el v-for="head in head_d" :key="head.head_of_dep_id">
    <li><strong>Id:</strong> {{ head.head_of_dep_id }}</li>
    <li><strong>Фамилия:</strong> {{ head.surname }}</li>
    <li><strong>Имя:</strong> {{ head.name }}</li>
    <li><strong>Отчество:</strong> {{ head.f_name }}</li>
  </item-el>



</section-main>


  </main-content>
</template>

<script>
import axios from "axios";
import API from "@/assets/API";


export default {
  data() {
    return {
      head_d: [],
      isLoading: true,
    }
  },

  mounted() {

    this.fetchData();
  },
  methods: {
    fetchData() {
      API.get('http://localhost:7777/api/auth/get-table')
          .then(response => {
            this.head_d = response.data.heads_of_department;
          })
          .catch(error => {
            this.errorMessage = "Произошла ошибка";
            console.error("Ошибка:", error);
            this.$router.push('/login');
          }).finally(() => {
        this.isLoading = false; // После завершения запроса устанавливаем isLoading в false
      });
    },
    logout(){
      API.post('http://localhost:7777/api/auth/logout')
          .then(res => {
            localStorage.removeItem('token')
            this.$router.push('/login');
          })
    }
    },


}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: #000;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header__body{
  margin-left: 20%;
  width: 80%; /* Занимает всю ширину экрана */
  position: fixed; /* Фиксируем header на экране */
  z-index: 10; /* Установите значение z-index */
  background-color: #F1FBFF;
}
.color__back{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.fon{
  width: 12rem;
  height: 1rem;
  background-color: #715ECE;
  border-radius: 0 0 20px 20px;
}









.header__body ul {
  display: flex;
}

.header__body li {
  flex: 1;
}

.header__menu li {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 32px;
}


.aside {
  position: fixed;
  z-index: 15;
  width: 20%;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
}



.dropdown {
  position: relative;
  list-style: none;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  margin-top: 90px;
  position: absolute;
  opacity: 0; /* Начальная прозрачность (невидимость) */
  visibility: hidden; /* Начальная невидимость */
  transition: opacity 0.3s, visibility 0.3s; /* Анимация при изменении видимости */

}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}



</style>