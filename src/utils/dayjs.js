import 'dayjs/locale/zh-cn'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Vue from 'vue'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

Vue.filter('relativeTime', function (value) {
  return dayjs().to(value)
})
