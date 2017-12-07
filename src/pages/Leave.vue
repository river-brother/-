<template>
  <div id="leave">

    <el-table :data="tableData" border class="big">
      <el-table-column prop="name" label="姓名" min-width="100" ></el-table-column>
      <el-table-column prop="phone" label="电话" min-width="150"></el-table-column>
      <el-table-column prop="leave" label="留言" min-width="800" @click="enter" title="value"></el-table-column>
      <el-table-column label="操作" min-width="100">
        <template slot-scope="scope" >
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="10"
      :current-page="currentPager"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >

    </el-pagination>
  </div>

</template>

<script>
  export default{
    name: 'leave',
    data: function () {
      return {
        filterData:[],
        pageData:[],
        formLabelWidth: '50px', //添加数据弹框label标签宽度
        dialogFormVisible: false, //控制添加数据的弹框显示关闭
        total:0,
        pageNum:1,
        currentPager:1,
        pageSize:10,
        tableData: [
          {
            name: '小强',
            phone: 15828111204,
            leave: '<router-link> 组件支持用户在具有路由功sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          }, {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          }
          , {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          {
            name: '小强', phone: 15828111204, leave: '<router-link> 组件支持用户在具有路由功能的应用中 '
          }
        ]
      }
    },
    methods: {
      // 删除
      handleDelete (index, row) {
        this.tableData.splice(index, 1)
      },
      // handleSizeChange(page){
      //   this.pageNum = page;
      // },
      // handleCurrentChange(page){
      //   var num = page * this.pageSize;
      //   this.currentPager = page;
      //   this.total = this.filterData.length;
      //   this.pageData = this.filterData.slice(num-this.pageSize,num);
      // },
      // // 初始化显示第一页数据
      // created(){
      //   this.filterData = this.tableData;
      //   this.handleCurrentChange(1);
      //
      // }
    }
  }
</script>

<style>

  #leave .el-table .cell{
  white-space:nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}
  #leave .box{
  width: 200px;
  height: 200px;
  background: red;
  z-index: 1000;
}
 #leave .el-pagination{
  float: right;
   margin-top: 10px;
}

</style>
