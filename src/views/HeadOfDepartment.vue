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
        <li><head-link>Учетная запись</head-link></li>
      </ul>

    </nav>
  </header>

  <main-content>

  <aside-menu/>
<section-main>
        <item-el>
          <li><strong>ФИО:</strong> dsfsdfs EFIM Андреевич</li>
            <li><strong>sdfsdfs</strong> 21.11.2002</li>
        </item-el>
        <item-el>
          <li><strong>ФИО:</strong> dsfsdfs EFIM Андреевич</li>
            <li><strong>sdfsdfs</strong> 21.11.2002</li>
        </item-el>
        <item-el>
          <li><strong>ФИО:</strong> dsfsdfs EFIM Андреевич</li>
            <li><strong>sdfsdfs</strong> 21.11.2002</li>
        </item-el>
        <item-el>
          <li><strong>ФИО:</strong> dsfsdfs EFIM Андреевич</li>
            <li><strong>sdfsdfs</strong> 21.11.2002</li>
        </item-el>
        <item-el>
          <li><strong>ФИО:</strong> dsfsdfs EFIM Андреевич</li>
            <li><strong>sdfsdfs</strong> 21.11.2002</li>
        </item-el>
</section-main>

   
  </main-content>
</template>

<script>
export default {

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

footer {
  background-color: #263238;
}

section {
  padding: 32px;
}

.aside p {
  background-color: #90A4AE;
  padding: 8px;
  height: 10vh;
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
.header__menu a{

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


</style>