<template>
    <aside class="aside">
      <nav>
        <ul>
          <li>Таблицы</li>
          <li><a href="#" class="link">Цех</a></li>
          <li><a href="#" class="link">Участок</a></li>
          <li><a href="#" class="link">Начальник цеха</a></li>
          <li><a href="#" class="link">Начальник участка</a></li>
          <li><a href="#" class="link">Бригада</a></li>
          <li><a href="#" class="link">Бригада_участок</a></li>
          <li><a href="#" class="link">Тип изделия</a></li>
          <li><a href="#" class="link">Изделие</a></li>
          <li><a href="#" class="link">Продукт</a></li>
        </ul>
      </nav>
    </aside>

</template>

<script>
export default {
    name: 'aside-menu'
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
  text-decoration: none;
  color: black;
  width: 180px;
}
.link:hover{
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
}
aside li {
  display: flex;
  width: 100%; /* Устанавливаем ширину на 100% */
  max-width: 200px; /* Максимальная ширина для резиновости */
  margin: 0 auto; /* Центрируем элементы внутри aside */
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
</style>