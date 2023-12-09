<script setup></script>

<template>
  <nav class="app-topnav">
    <ul>
      <template v-if="true">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-user"></i>
            王牧
          </a>
        </li>
        <el-popconfirm title="确认退出吗？" confirm-button-text="确定" cancel-button-text="取消">
          <template #reference>
            <el-button>退出登录</el-button>
          </template>
        </el-popconfirm>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
      </template>
      <template v-else>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
      </template>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
.app-topnav {
  background-color: #333333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666666;
        }
      }
    }
  }
}
</style>
