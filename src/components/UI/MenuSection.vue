<template>
<div class="main">
  <div class="header__body">
    <div class="header__burger" v-bind:class="{ 'active': isActive }" @click="toggleMenu">
      <span></span> <!-- span для бургера -->
    </div>
    <nav class="header__menu" v-bind:class="{ 'active': isActive }">
      <ul class="header__list">
        <li>
          <p>Таблицы:</p>
        </li>
        <li>
          <router-link
              v-for="link in links"
              :key="link.id"
              :to="link.path"
              :class="{ actived: $route.path === link.path }"
              class="menu-link"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div><!-- header body -->
</div>
</template>

<script>
export default {
    name: 'menu-section',
    data() {
        return {
            links: [
                { id: 1, label: 'Цех', path: '/department' },
                { id: 2, label: 'Участок', path: '/area' },
                { id: 3, label: 'Начальник цеха', path: '/registration' },
                { id: 9, label: 'Начальник участка', path: '/registration' },
                { id: 4, label: 'Бригада', path: '/registration' },
                { id: 5, label: 'Брига_участки', path: '/registration' },
                { id: 6, label: 'Тип изделия', path: '/registration' },
                { id: 7, label: 'Изделие', path: '/registration' },
                { id: 8, label: 'Продукт', path: '/registration' },
            ],
          isActive: false,
          currentPath: '',
        }
    },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      document.body.classList.toggle('lock');
    }
  },
  created() {
    this.currentPath = this.$route.path; // Обновляем текущий путь
    this.$router.beforeEach((to, from, next) => {
      this.currentPath = to.path; // Обновляем текущий путь при каждом изменении маршрута
      next();
    });
  }
};
</script>

<style>
/*.main{*/

/*    height: 100vh;*/
/*    display: flex;*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*    width: 300px;*/
/*  position: relative;*/

/*}*/
/*.menu{*/
/*    display: flex;*/
/*    background-color: #F1FBFF;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    position: fixed;*/
/*    left: 0;*/
/*    top: 0;*/
/*    padding: 60px 15px;*/




/*}*/
/*.header__body {*/
/*  position: fixed;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  height: 100vh;*/
/*  background-color: #F1FBFF;*/
/*  //width: 300px;*/
/*  align-items: center;*/
/*}*/
/*.header__list{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  position: relative;*/
/*  z-index: 2;*/
/*}*/
/*.header__list li{*/
/*  list-style: none;*/

/*  margin: 0 0.5rem 0 0.5rem;*/
/*}*/
/*.menu-link{*/
/*    white-space: nowrap;*/
/*    color: #000000;*/
/*    background: #FFFFFF;*/
/*    text-align: center;*/
/*    text-decoration: none;*/
/*    margin-top: 35px;*/
/*    border: 1px solid #D4D4D4;*/
/*    border-radius: 1px;*/
/*    padding: 4px 0;*/
/*    display: inline-block;*/
/*    box-shadow: inset 0 0 0 0 #7E69E5;*/
/*    -webkit-transition: ease-out 0.4s;*/
/*    -moz-transition: ease-out 0.4s;*/
/*    transition: ease-out 0.4s;*/
/*    width: 13.5rem;*/

/*}*/
/*.menu-link:hover {*/
/*    box-shadow: inset 400px 0 0 0 #7E69E5;*/
/*    color: #F1FBFF;*/
/*}*/
/*.actived {*/
/*    background: #7E69E5;*/
/*    font-weight: bold;*/
/*    color: #F1FBFF;*/
/*}*/
/*@media (max-width: 880px) {*/
/*  .main{*/
/*    align-items: flex-start;*/
/*    width: 80px;*/
/*    height: 20px;*/
/*    padding: 20px 0;*/
/*    z-index: 2;*/
/*    position: absolute;*/
/*    justify-content: center;*/

/*  }*/
/*  body.lock{*/
/*    overflow: hidden;*/
/*    z-index: 3;*/
/*    position: relative;*/
/*  }*/
/*  .header__body{*/
/*    justify-content: flex-start;*/
/*    align-items: flex-start;*/
/*    background-color: #FFFFFF;*/
/*    height: 20px;*/
/*    margin-left: 25px;*/
/*  }*/
/*  .header__burger{*/
/*    display: block;*/
/*    position: relative;*/
/*    width: 30px;*/
/*    height: 20px;*/

/*    z-index: 5;*/
/*  }*/
/*  .header__list{*/
/*    justify-content: flex-start;*/
/*    align-items: flex-start;*/
/*  }*/

/*  .header__burger:before,*/
/*  .header__burger:after{*/
/*    content: '';*/
/*    background-color: #000000;*/
/*    position: absolute;*/
/*    width: 100%;*/
/*    height: 2px;*/
/*    left: 0;*/
/*    transition: all 0.3s ease 0s;*/
/*  }*/

/*  .header__burger:before{*/
/*    top: 0;*/
/*  }*/
/*  .header__burger:after{*/
/*    bottom: 0;*/
/*  }*/
/*  .header__burger span{*/
/*    position: absolute;*/
/*    background-color: #000000;*/
/*    left: 0;*/
/*    width: 100%;*/
/*    height: 2px;*/
/*    top: 9px;*/
/*  }*/
/*  .header__menu {*/
/*    position: fixed;*/
/*    top: -150%;*/
/*    left: 0;*/
/*    width: 100%;*/
/*    height: 100%;*/
/*    background-color: #fff;*/
/*    padding: 70px 10px 20px 10px;*/
/*    transition: all 0.3s ease 0s;*/
/*    overflow: scroll;*/
/*  }*/
/*  .header__menu.active{*/
/*    top: 0;*/
/*    display: flex;*/
/*  }*/
/*  .menu-link{*/
/*    margin: 0.6rem;*/
/*  }*/
/*  @media (max-width: 760px) {*/
/*    .header__body{*/
/*      margin-left: -15px;*/
/*    }*/

/*  }*/
/*}*/
</style>
