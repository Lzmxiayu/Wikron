<template>
<div id='register'>
   <main class="form-register" v-if="true">
      <div class="aTitle">
          <h4 class="mb-3">注册账户</h4>
      </div>
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <!-- <div class="col-sm-6">
                <label for="firstName" class="form-label">名字</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">姓</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div> -->

              <div class="col-12">
                <label for="username" class="form-label">用户名</label>
                <div class="input-group has-validation">
                  <input type="text" :class="classes.usernameClass" id="username" v-model="signUpForm.username" placeholder="Username" required>
                
                <div class="invalid-feedback">
                    用户名长度需要在6到10之间！
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">邮箱 <span class="text-muted">(可选)</span></label>
                 <!-- <span class="input-group-text">@</span> -->
                <input type="email" :class="classes.emailClass" id="email" v-model="signUpForm.email" placeholder="you@example.com">
                <div class="invalid-feedback">
                  邮箱格式错误,应该包含单个@且@不能置于头尾
                </div>
              </div>
               <div class="col-12">
                <label for="password" class="form-label">密码</label>
                  <input type="password" :class="classes.passwordClass" id="email" v-model="signUpForm.password" placeholder="***********">
                <div class="invalid-feedback">
                  请输入8到16位的密码
                </div>
              </div>
               <div class="col-12">
                <label for="password" class="form-label">确认密码</label>
                <input type="password" v-model="confirmPassword" :class="classes.confirmPassClass" id="email" placeholder="***********">
                <div class="invalid-feedback">
                  两次密码不一致
                </div>
              </div>
              <!-- <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div> -->
            </div>
            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit" @click="Register()">注册</button>
            <button class="w-100 btn btn-lg btn-secondary" type="submit" @click="switchRoute('Auth')">返回登录</button>
          </form>
    </main>
</div>
</template>

<script>
import axios from 'axios'
import { signup } from '../../actions/auth'

export default {
    name:'register',
    data(){
      return{
        signUpForm: {
          username: '',
          password: '',
          email:''
        },
        confirmPassword:'',
        classes:{
          usernameClass:'form-control ',
          emailClass:'form-control',
          passwordClass:'form-control ',
          confirmPassClass:'form-control'
        }
        
      }
    },
    methods:{
        switchRoute(route){
            this.$router.push({
                name:route
            })
        },
        setClass(type,add){
          const f='form-control '
          switch(type){
            case 'username':this.classes.usernameClass=f+add;
                            break;
            case 'email':this.classes.emailClass=f+add;
                            break;
            case 'password':this.classes.passwordClass=f+add;
                            break;
            case 'confirmPassword':this.classes.confirmPassClass=f+add;
                            break;
            default:break

          }
          
        },
        VerifyInfo(){
          //用户名格式验证
          if(this.signUpForm.name.length<6)
            this.setClass('username','is-invalid')
          else this.setClass('username','is-valid')
          //密码格式验证
          if(this.signUpForm.password.length<8 || this.signUpForm.password.length>16)
            this.setClass('password','is-invalid')
          else this.setClass('password','is-valid')
          //确认密码格式验证
          if(this.signUpForm.password.length<8 || this.signUpForm.password.length>16){}
          else if(this.signUpForm.password !== this.confirmPassword )
            this.setClass('confirmPassword','is-invalid')
          else this.setClass('confirmPassword','is-valid')
          //邮箱地址验证
          const findAEmailstart = this.signUpForm.email.indexOf('@')
          const findAEmailend = this.signUpForm.email.lastIndexOf('@')
          if(findAEmailstart == -1 || findAEmailstart != findAEmailend || (findAEmailstart==0 || findAEmailstart == this.signUpForm.email.length-1)    )
            this.setClass('email','is-invalid')
          else this.setClass('email','is-valid')
          
        },
        Register(){
          // this.VerifyInfo()
          
          
          // console.log(this.signUpForm.email.indexOf('@'),this.signUpForm.email.lastIndexOf('@'),this.signUpForm.email.indexOf('@')==this.signUpForm.email.length)

            // signin(this.signUpForm,this.$router)
            signup(this.signUpForm,this.$router)
            
        }
    }
}
</script>

<style>
#register{
    height: 100vh;
    display: flex;
    padding-bottom: 60px;
    background-color:#f5f5f5;
}
.aTitle{
  text-align: center;
}

.form-register{
   width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
  /* text-align: center; */
  padding-top:0 ;
}
.btn-primary{
  margin-bottom: 15px;
}
</style>