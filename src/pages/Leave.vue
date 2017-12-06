<template>
  <div id="leave">

    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="name" label="姓名" width="100" ></el-table-column>
      <el-table-column prop="phone" label="电话" width="150"></el-table-column>
      <el-table-column prop="leave" label="留言" width="800" @click="enter" title="value"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope" >
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">

    </el-pagination>
  </div>

</template>

<script>
  export default{
    name: 'leave',
    data: function () {
      return {
        pagesize: 1,
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
          }
        ]
      }
    },
    methods: {
    //   handleDelete: function(index, row) {
    //     var array = [];
    //     array.push(row.id);
    //     this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
    //       this.loadData(this.criteria, this.currentPage, this.pagesize);
    //     },function(){
    //       console.log('failed');
    //     });
    //   },
    //   enter: function(){
    //     this.message = '修改值';
    //   },
    //   leave: function(){
    //     this.message = '默认值';
    //   }
    //   $(".cell")

      enter () {
        // $('.el-table .cell').addClass($('.box'))
      }
    }
  }
</script>

<style>

  .el-table .cell{
  width: 800px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}
.box{
  width: 200px;
  height: 200px;
  background: red;
  z-index: 1000;
}

</style>
