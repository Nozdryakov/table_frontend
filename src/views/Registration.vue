<template>
    <div>
        <div class="account__section">
            <div class="content__section">
                <login-title>Введите ваш логин и пароль</login-title>
                <login-form>
                  <login-input v-model="email" placeholder="Почта" @input="handleEmailInput"></login-input>
                  <login-input v-model="password" placeholder="Пароль" type="password" @input="handlePasswordInput"></login-input>
                  <login-input v-model="password_conf" placeholder="Повторите пароль" type="password" @input="handlePasswordConfInput"></login-input>

                  <login-button @click.prevent="fetchData">Зарегистрироваться</login-button>
                    <span>или</span>
                    <button @click="$router.push('/login')">Войти</button>
                </login-form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginButton from "@/components/UI/LoginButton.vue";
import LoginTitle from "@/components/UI/LoginTitle.vue";
import LoginForm from "@/components/UI/LoginForm.vue";
import LoginInput from "@/components/UI/LoginInput.vue";
import axios from "axios";

export default {
  components: {LoginInput, LoginForm, LoginTitle, LoginButton},

  data() {
    return {
      email: null,
      password: null,
      password_conf: null,
    }
  },
  methods: {
    handleEmailInput(event) {
      this.email = event.target.value;
    },
    handlePasswordInput(event) {
      this.password = event.target.value;
    },
    handlePasswordConfInput(event) {
      this.password_conf = event.target.value;
    },
    async fetchData() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
          password_conf: this.password_conf,
        };

        const response = await axios.post('http://localhost:7777/api/register', JSON.stringify(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Response data:', response.data);

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/head-of-dep');
        } else {
          console.error('Non-success status code:', response.status);
        }
      } catch (error) {
        // Log the error
        console.error('Error:', error);
      }
    }

  },
}
</script>

<style scoped>
.account__section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F1FBFF;
}
.content__section{
    position: relative;
    width: 815px;
    height: 600px;
    background-color: #F1FBFF;
    border-radius: 40px;
    box-shadow: 2px 2px 38px rgba(115, 115, 115, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
span{
    margin-top: 10px;
    color: #1B1F2C;
    font-size: 16px;
}
button{
    margin-top: 10px;
    padding: 0;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: Nunito;
    color: #1B1F2C;
}
button:hover{
    text-decoration: underline;
}
@media (max-width: 880px) {
    .content__section {
        width: 615px;
        height: 470px;
    }
}
@media (max-width: 640px) {
    .content__section {
        width: 550px;
        height: 440px;
    }
}
@media (max-width: 575px) {
    .content__section {
        width: 375px;
    }
}
</style>