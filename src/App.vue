
<template>
  <div id="app">
    <router-view v-if="$route.path == '/login'"/>
    <el-container v-if="$route.path != '/login'">

      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :router="true">
        <template v-for="(menu,index) in menus">

          <el-submenu :key="index" v-if="menu.sub" :index="index.toString()" style="width: 200px">
            <template slot="title">
              <i v-if="menu.icon" :class="menu.icon"></i>
              <span slot="title">{{ menu.name }}</span>
            </template>
            <el-menu-item v-for="(item,index) in menu.sub" :key="index" :index="item.path">
              <i v-if="item.icon" :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item :key="index" v-if="!menu.sub" :index="menu.path">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span slot="title" index="/leave">{{ menu.name }}</span>
            <!--<el-menu-item index="1">{{ menu.name }}</el-menu-item>-->
          </el-menu-item>

        </template>
      </el-menu>

      <el-container>
        <el-header>
        	<el-dropdown>
  					<span class="el-dropdown-link">
    					  您好:    {{user}}
    					<i class="el-icon-arrow-down el-icon--right"></i>
  					</span>
	 					<el-dropdown-menu slot="dropdown">
	    				<el-dropdown-item @click.native="secedeChange">注销</el-dropdown-item>
	 					</el-dropdown-menu>
					</el-dropdown>
        </el-header>
        <el-main><router-view/></el-main>
        <el-footer></el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      user: '用户名',
      menus: [
        {name: '首页', path: '/', icon: 'el-icon-location'},
        {
          name: '留言管理',
          icon: 'el-icon-location',
          sub: [
            {
              name: '留言',
              icon: 'el-icon-location',
              path: '/leave'
            }
          ]
        }
      ]
    }
  },
  methods: {
    secedeChange (token) {
      localStorage.removeItem('token')
      window.location.href = '/'
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .menu{
    width: 200px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
  .el-container:nth-child(1) {
    height: 100%;
  }
.el-footer,.el-header{
  background: rgb(84, 92, 100);
}
.el-header{
  line-height: 60px;
  color: white;

}
.el-header .el-dropdown{
	float: right;
}
.el-header .el-dropdown-link{
	color: white;
}
.el-header #exit{
	border: none;
	width: 30px;
	height: 30px;
	color: white;
	background: #878D99;
	float: right;
}
.black_overlay{
	display: none;
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index:1001;
	-moz-opacity: 0.8;
	opacity:.80;
	filter: alpha(opacity=88);
}
  .white_content {
    display: none;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 55%;
    height: 55%;
    padding: 20px;
    border: 10px solid orange;
    background-color: white;
    z-index:1002;
    overflow: auto;
  }
</style>
