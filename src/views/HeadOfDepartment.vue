<template>
  <header class="header__body">
    <div class="color__back">
      <div class="fon"></div>
      <div class="title">Начальники</div>
    </div>
    <nav class="header__menu">
      <ul>
        <li><input type="text"></li>
        <li><a href="#" class="link">Фильтры</a></li>
      </ul>

      <ul>
        <li><a href="#" class="link">Добавить запись</a></li>
        <li><a href="#" class="link">Учетная запись</a></li>
      </ul>

    </nav>
  </header>

  <main class="main">
    <aside class="aside">
      <nav>
        <ul>
          <li>Таблицы</li>
          <li><a href="#" class="link laside">Цех</a></li>
          <li><a href="#" class="link laside">Участок</a></li>
          <li><a href="#" class="link laside">Начальник цеха</a></li>
          <li><a href="#" class="link laside">Начальник участка</a></li>
          <li><a href="#" class="link laside">Бригада</a></li>
          <li><a href="#" class="link laside">Бригада_участок</a></li>
          <li><a href="#" class="link laside">Тип изделия</a></li>
          <li><a href="#" class="link laside">Изделие</a></li>
          <li><a href="#" class="link laside">Продукт</a></li>
        </ul>
      </nav>
    </aside>



    <section>
      <div class="block">
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li><strong>ФИО:</strong> Ноздряков Артем Андреевич</li>
            <li><strong>Дата рождения:</strong> 21.11.2002</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
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

nav {

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


.main {
  flex: 1;
  padding: 21vh 0 0 0;
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

.main {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
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

section {
  flex: 1;
  /* occupe la hauteur restante  */
  margin-left: 20%;
}

section p {
  margin-bottom: 32px;
  text-align: justify;
}




aside {
  display: flex;
  flex-flow: column wrap;
}


aside nav {
  display: flex;
  flex-flow: column wrap;
  flex: 1;
  position: relative;
  background-color: #F1FBFF;

}



aside ul {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: space-evenly;
  padding: 0 2rem;
}

aside li {
  display: flex;


}

.laside,
aside li {
  width: 100%; /* Устанавливаем ширину на 100% */
  max-width: 200px; /* Максимальная ширина для резиновости */
  margin: 0 auto; /* Центрируем элементы внутри aside */
}

.block {
  display: flex;
  justify-content: space-between;
  max-width: calc(100% - 32%);
  width: 100%;
  flex-wrap: wrap;
}

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