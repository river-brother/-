<template>
  <div id="leave">

    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="name" label="姓名" width="100" ></el-table-column>
      <el-table-column prop="phone" label="电话" width="150"></el-table-column>
      <el-table-column prop="leave" label="留言" width="800" @mouseenter="enter" @mouseleave="leave"></el-table-column>
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
    name:'leave',
    data(){
      return{
        pagesize: 1,
        tableData:[
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中大声地加强偶尔回去和气和亲戚额一千二去欧赔去欧赔欧群殴为去哦撒是的噶U盾噶端预估亚速度与  '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中 '
          },
          { name:"小强",phone:15828111204, leave:'<router-link> 组件支持用户在具有路由功能的应用中Dd'
          },

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
      enter: function(){
        this.message = '修改值';
      },
      leave: function(){
        this.message = '默认值';
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

</style>
