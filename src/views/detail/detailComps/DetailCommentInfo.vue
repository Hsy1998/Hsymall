.<template>
  <div class="comment-info">
    <div class="comment">
      <span>用户评价</span>
      <span>更多 &gt;</span>
    </div>
    <div class="uesr-info">
      <div class="avatar">
        <img :src="commentInfo.user.avatar"
             alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info">
        <p>{{commentInfo.content}}</p>
      </div>
      <div class="detail">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="img">
        <img :src="item"
             v-for="(item, index) in commentInfo.images"
             :key="index"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils"
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default: () => { }
    }
  },
  filters: {
    showDate (value) {
      // 1.将时间戳转成Date对象
      const date = new Date(value * 1000)

      // 2.将date进行格式化
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
.comment-info {
  width: 100%;
  padding: 10px;
  border-top: 5px solid rgb(235, 235, 235);
}
.comment {
  font-size: 14px;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(235, 235, 235);
}
.avatar {
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-weight: bold;
  font-size: 15px;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.uesr-info {
  font-size: 12px;
}
.uesr-info .info {
  font-size: 14px;
  margin-bottom: 10px;
}
.detail {
  color: rgb(160, 160, 160);
}
.date {
  margin-right: 10px;
}
.img {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0;
}
.img img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
</style>