<template>
  <div class="login">
    <div class="main">
      <h2>用户登录</h2>
      <p><span>名称</span><input type="text" placeholder="请填写用户名" class="name"/></p>
      <p><span>密码</span><input type="password" placeholder="请填写密码" class="pawd"/></p>
      <input type="submit" value="提    交" class="but" @click="inputChange"/>
    </div>
    <div id="lightbox"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {

    },
    inputChange () {
      // window.location.href = "/app.vue";
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
  .login input{
    width: 200px;
    height: 40px;
  }
  .login .but{
    width: 150px;
    background: blue;
    border: none;
    border-radius: 10px;
  }
  .login .main{
    text-align: center;
  }
  .login .main p span{
    margin-right: 5px;
  }
  .login .main p{
    margin-top: 20px;
  }
  .login .main .but{
    margin-top: 50px;
    color: white;
  }
  .login .name,.pawd{
    padding-left: 5px;
  }
</style>
