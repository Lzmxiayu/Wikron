<template>
  <div id="auth">
    <div class="col-12 pt-1">
      <a class="btn btn-sm btn-outline-secondary" href="#" @click="switchRoute('Home')">返回</a>
    </div>
      
      <main class="form-signin">
        
        <form>
            <img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">请登录</h1>

            <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="Username" v-model="loginForm.username">
            <label for="username" class="form-label">用户名</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="loginForm.password">
            <label for="floatingPassword">密码</label>
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> 记住我
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click="SignIn()">登录</button>
            <button class="w-100 btn btn-lg btn-secondary" type="submit" @click="switchRoute('Register')">注册</button>
            <!-- <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p> -->
        </form>
    </main>
  </div>
</template>

<script>
import { signin } from '../../actions/auth'
export default {
  name:'auth',
  data(){
    return {
      loginForm: {
        username: '',
        password: '',
      }
    }
  },
   methods:{
        switchRoute(route){
            this.$router.push({
                name:route
            })
        },
        async SignIn(){
          let res = await signin(this.loginForm,this.$router)

        }
    }
}
</script>

<style scoped>
#auth{
    height: 100vh;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
    background-color: #f5f5f5;
}

.form-signin {
  text-align: center;
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-primary{
  margin-bottom: 15px;
}
.btn-secondary{
  margin-bottom: 15px;
}
.btn-outline-secondary{
  /* display: flex; */
  margin-left: 1%;
}

</style>