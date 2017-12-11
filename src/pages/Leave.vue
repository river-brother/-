<template>
  <div class="leave">
    <div>
      <!-- 列表 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="phone" label="电话" width="150"></el-table-column>
        <el-table-column prop="content" label="留言"></el-table-column>
        <el-table-column operation="操作" label="操作" width="100">
          <template slot-scope="scope">
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <!--page-size	每页显示条目个数-->
      <!--page-count-->
      <el-row :gutter="20">
        <el-col :span="12" :offset="9">
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :page-size="parseInt(size)"
              :total="total"
              @current-change="pageChange"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import QueryString from 'query-string'

  export default {
    name: 'leave',
    data () {
      return {
        form: {   // 添加列表时,初始化数据
          name: '',
          phone: '',
          content: ''
        },
        total: 0,  // 总页数
        size: 0,   // 每页显示条目个数
        orgData: [],
        num: 0,
        query: {
          page: 1,
          size: 15
        }
      }
    },
    computed: {
      tableData: {   // 重新发送请求渲染模板
        get: function () {
          return this.orgData
        },
        set: function (newValue) {
          this.orgData = newValue
        }
      }
    },
    methods: {
      handleDelete: function (index, data) {
        this.$http.delete('message-board/' + data.id).then(
          (success) => {
            this.getData()
            this.$message({
              showClose: true,
              message: '删除成功',
              type: 'success'
            })
          },
        (error) => {
          console.log(error)
          this.$message('删除失败')
        })
      },
      getData: function () {
        this.$http.get('message-board?' + QueryString.stringify(this.query)).then((success) => {
          if (success.status === 200) {
            // console.log(success)
            // console.log(this.tableData)
            this.tableData = success.body.data
            this.size = success.body.per_page   // 每页记录数 15
            this.total = success.body.total   // 总页数 16
          }
        }, (error) => {
          if (error.status !== 200) {
            alert('请求失败')
          }
        })
      },
      pageChange: function (r) {
        this.query.page = r
        this.getData()
      }
      // handleDelete (index, data) {
      //   console.log(data)
      // }
    },
    mounted () {
      // console.log(QueryString.stringify({foo: 'bar'}))
      this.getData()
    }
  }
</script>

<style>
  .box {
    width: 500px;
  }

  .el-form-item__label {
    line-height: 20px;
    font-size: 16px;
  }

  .add_btn {
    float: right;
  }

  .el-dialog--small {
    max-width: 500px;
  }

  .el-dialog__body {
    padding-bottom: 0;
  }

  .el-form-item {
    margin-bottom: 0;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-pagination {
    margin-top: 10px;
  }
</style>

