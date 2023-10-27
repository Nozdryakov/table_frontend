<template>
  <aside class="aside" :class="{ 'full-weight': isMobileMenuOpen }">
    <nav>
      <div class="burger-menu" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
      <ul :class="{ 'mobile-menu-open': isMobileMenuOpen }">
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
  name: 'aside-menu',
  data() {
    return {
      isMobile: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth < 1180;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
.link {
  display: flex;
  padding: 10px 35px;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  font-family: Nunito;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  text-decoration: none;
  color: black;
  width: 180px;
}

.link:hover {
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
}

aside li {
  display: flex;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}


.aside {
  position: fixed;
  z-index: 15;
  width: 20%;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
}
aside nav {
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  //flex-shrink: 1;
  position: relative;
  background-color: #f1fbff;
}

aside ul {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: space-evenly;
  padding: 0 2rem;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
}

.burger-line {
  width: 20px;
  height: 2px;
  background-color: #000;
  margin: 3px;
}

/* Мобильная версия */
@media (max-width: 1179px) {
  .aside {
    display: flex;
    justify-content: center;
    height: 50px;
    width: 5%;


  }
  .aside nav{
    height: 100%;
    //overflow: scroll;
  }

  .burger-menu {
    display: flex;
    position: absolute;
    z-index: 50;
  }

  aside ul {
    display: none;
    flex-wrap: wrap;
    padding: 0;
  }
  aside li{
    margin-top: 10px;
  }
  .aside.full-weight{
    height: 100%;
    width: 100%;
    overflow: scroll;
  }

  aside ul.mobile-menu-open {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
  .link{
    padding: 6px 20px;
    font-size: 13px;
  }
}
</style>