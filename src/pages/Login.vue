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
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-search"
          v-model="password">
        </el-input>
      </div>
      <!--<input type="submit" value="提    交" id="but" @click="butChang"/>-->
      <el-button type="primary" @click="login">登    录</el-button>
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
  // mounted () {
  //   this.$http.get('http://120.78.145.150:8080/oauth/token').then((success) => {
  //     console.log(success.data)
  //
  //   }, (error) => {
  //
  //   })
  // },
  methods: {
    getUser: function () {
      this.$http.get('http://120.78.145.150:8080/api/user').then((success) => {
        // console.log(success)
        localStorage.setItem('userName', success.body.data.name)
      }, (error) => {
        if (error.status !== 200) {
          alert('请求失败')
        }
      })
    },
    login () {
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
      this.$http.post('http://120.78.145.150:8080/oauth/token', formData).then((success) => {
        // console.log(success)
        if (success.status === 200) {
          localStorage.setItem('token', success.body.data.access_token)
          this.getUser()
          setTimeout(() => {
            this.$router.push({ name: 'index' })
          }, 500)
        }
      }, (error) => {
      // console.log(error.status)
        if (error.status === 401) {
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
