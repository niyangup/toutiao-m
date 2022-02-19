<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <div v-if="isDelete">
        <span @click="clear">全部删除</span>
        &nbsp;&nbsp;
        <span @click="toggleDelete">完成</span>
      </div>

      <van-icon v-else name="delete" @click="toggleDelete"/>
    </van-cell>

    <van-cell :title="item" v-for="(item,index) in searchHistory" :key="index" @click="handleClick(item,index)">
      <van-icon name="close" v-show="isDelete"/>
    </van-cell>

  </div>
</template>

<script>
export default {
  name: 'search-history',
  props: {
    searchHistory: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDelete: false
    }
  },
  methods: {
    toggleDelete () {
      this.isDelete = !this.isDelete
    },
    handleClick (item, index) {
      if (this.isDelete) {
        this.searchHistory.splice(index, 1)
      } else {
        this.$emit('search', item)
      }
    },
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<style scoped lang="less">

</style>
