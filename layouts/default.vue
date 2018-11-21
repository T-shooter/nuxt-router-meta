<template>
  <div>
    <el-menu 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" 
      :default-active="defaultActive" 
      theme="dark" 
      router>
        <el-menu-item index="/demoPage">
        <i class="el-icon-setting"></i>
        <span slot="title">设置中心</span>
      </el-menu-item>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  },
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
