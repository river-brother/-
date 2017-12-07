<template>
  <div class="login">
    <div class="main">
      <h2>用户登录</h2>
      <div>
        <span>账号: </span>
        <!--<input type="text" placeholder="请填写用户名" id="name" v-model.trim="name"/>-->
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-search"
          v-model="username">
        </el-input>
      </div>
      <div>
        <span>密码: </span>
        <!--<input type="password" placeholder="请填写密码" id="pawd" v-model.trim="password"/>-->
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-search"
          v-model="password">
        </el-input>
      </div>
      <!--<input type="submit" value="提    交" id="but" @click="butChang"/>-->
      <el-button type="primary" @click="butChang">登    录</el-button>
    </div>
    <div id="lightbox"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {

  },
  methods: {
    butChang () {
      var formData = {}
      formData.username = this.username
      formData.password = this.password
      formData.grant_type = 'password'
      formData.client_id = 2
      formData.client_secret = 'yuCoXKPmYy2uEsRgnPqRyfyVMaLjHaULXxgZGxPB'

      var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (!reg.test(this.username)) {
        alert('邮箱格式不正确')
      } else if (this.password.length < 6) {
        alert('密码不能小于6位')
      }
      // this.$http.post({
      //   method: 'POST',
      //   url: 'http://120.78.145.150:8080/oauth/token',
      //   data: 'formData'
      // })
      this.$http.post('http://120.78.145.150:8080/oauth/token', formData).then((success) => {
        if (status = 200) {
          window.location.href = '/index'
        }
      }, (error) => {
        if (status = 401) {
          alert('账号密码错误')
        }
      })
    }
  }
}
</script>


<style>
  .login .main{
    width: 300px;
    height: 300px;
    position: absolute;
    border: 1px solid #cccccc;
    margin: auto;
    top: 200px;
    text-align: center;
  }
  .login #lightbox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: .5;
  }
  .login .main{
    position: relative;
    background: white;
    z-index: 1;
  }
  .login h2{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .login .el-input{
    width: 200px;
    margin-top: 20px;
  }
  .login .el-button{
    margin-top: 30px;
  }
</style>
