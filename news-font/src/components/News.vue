<template>
    <div id="app" class="layout">
        <!--头部 -->
        <div class="header">
            <div class="header-on">
                <div class="header-icon">
                    <a href="http://www.aiyunxiao.com/">
                        <img src="../assets/images/common/aiyunxiao.png" alt="aiyunxiao">
                    </a>
                </div>
                <div class="header-tab">
                    <ul>
                        <li>
                            <a href="">首页</a>
                            <span></span>
                        </li>
                        <li>
                            <a href="">新闻中心</a>
                            <span></span>
                        </li>
                        <li>
                            <el-dropdown placement="top">
                                <a class="el-dropdown-link">
                                业务体系
                                <i class="el-icon-arrow-down el-icon--right"></i>
                                </a>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>好分数系列</el-dropdown-item>
                                    <el-dropdown-item>爱云校系列</el-dropdown-item>
                                    <el-dropdown-item>书联网系列</el-dropdown-item>
                                    <el-dropdown-item>慧学空间</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <span></span>
                        </li>
                        <li>
                            <a href="">关于我们</a>
                            <span></span>
                        </li>
                        <li>
                            <a href="">招商合作</a>
                            <span></span>
                        </li>
                        <li>
                            <a href="">欢迎加入</a>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 新闻主题 -->
        <div>
            <div class="news-page">
                <div class="loading">
                    <div class="news-page-on" v-for="(item,index) in list" :key="index">
                            <div class="left-img" >
                                <img :src="item.pictures[0]">
                            </div>
                            <div class="mid-content">
                                <p >{{ item.title }}</p>
                                <pre v-html="item.content">  </pre>
                            </div>
                            <div class="right-date">
                                <span>{{ item.createTime | formaDate }}</span>
                            </div>
                    </div>
                </div>
            </div>
            <!-- 分页按钮 -->
            <ul class="pagination">
                 <!-- <el-pagination
                :page-size="10"
                layout="prev, pager, next"
                :total="20"         
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                :current-page="activePage">
                </el-pagination> -->
                <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">&lt;</a></li>
                <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                    <a href="#" >{{ index }}</a>
                </li>
                <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#" >&gt;</a></li>
            </ul>
        </div>
        <!--新闻底部  -->
        <div class="footer">
            <div class="footer-content">
                <div class="footer-introduce">
                    <section class="footer-introduce-produce">
                        <h3>产品服务</h3>
                        <ul>
                            <li>
                                <span>好分数系列</span>
                                <div>
                                    <a href="">学生端</a>
                                    <b>|</b>
                                    <a href="">教师端</a>
                                    <b>|</b>
                                    <a href="">家长端</a>
                                    <b>|</b>
                                    <a href="">好分数辅导</a>
                                    <b>|</b>
                                    <a href="">阅卷</a>
                                    <b>|</b>
                                    <a href="">智能组卷</a>
                                </div>
                            </li>
                            <li>
                                <span>爱云校系列</span>
                                <div>
                                    <a href="">智慧校园</a>
                                    <b>|</b>
                                    <a href="">排课</a>
                                    <b>|</b>
                                    <a href="">移动微校园</a>
                                    <b>|</b>
                                    <a href="">生涯规划</a>
                                    <b>|</b>
                                    <a href="">课程与学习平台</a>
                                    <b>|</b>
                                    <a href="">分析</a>
                                    <b>|</b>
                                    <a href="">区域教育大数据平台</a>
                                </div>
                            </li>
                            <li>
                                <span>书联网系列</span>
                                <div>
                                    <a href="http://www.aipublish.cn">书联网平台</a> 
                                </div>
                            </li>
                            <li>
                                <span>慧学空间系列</span>
                                <div>
                                    <label >慧学营</label>
                                    <b>|</b>
                                    <label >慧友记</label>
                                    <b>|</b>
                                    <label >慧精讲</label>
                                    <b>|</b>
                                    <label >慧友商城</label>
                                    <b>|</b>
                                    <label >慧友沙龙</label>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section class="footer-introduce-us">
                        <h3>爱云校</h3>
                        <div>
                            <a href="">公司理念</a>
                            <a href="">关于我们</a>
                            <a href="">招商合作</a>
                            <a href="">合作加入</a>
                        </div>
                    </section>
                    <section class="footer-introduce-account">
                        <h3>社交账号</h3>
                    </section>
                    <footer>
                        <div class="footer-introduce-address">
                            北京朝阳区望京SOHO.T1.B座21层 （100020）
                        </div>
                        <div class="footer-introduce-phone">
                            400-017-0920
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { formaDate } from "../assets/scripts/filter.js";
export default {
  filters: {
    formaDate(time) {
      var data = new Date(time);
      return formaDate(data, "yyyy-MM-dd");
    }
  },
  data() {
    return {
      parmars: {
        start: 0,
        limit: 18
      },
      list: [],
      current:1,
      showItem:2,
      allpage:2
    };
  },
 computed:{
     pages:function(){
        var pag = [];
        if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                        //总页数和要显示的条数那个大就显示多少条
            var i = Math.min(this.showItem,this.allpage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
             var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
             i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
             middle = (this.allpage - this.showItem) + 1
            }
          while(i--){
             pag.push( middle++ );
          }
        }
        return pag
     }
   },
  methods: {
    callApi(start) {
      this.$http
        .get(
          `/v1/article/published-list?start=${start}&limit=${
            this.parmars.limit
          }`
        )
        .then(resp => this.$checkResp(resp))
        .then(data => {
          // console.log(data.details)
          this.list = data.details;
        //   console.log(this.list);

        })
        .catch(err => {
          this.$handleError(err);
        });
    },
    handleCurrentChange( val){
       this.currentPage = val;
    },
    handleSizeChange(val) {
        this.pagesize = val;
       //console.log(`每页 ${val} 条`);
    },
  },
  mounted() {
    this.callApi(0);
  },
};
</script>
<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.layout {
  position: relative;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  background-color: #fff;
  z-index: 9;
}
.header-on {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
}
.header-icon {
  width: 128px;
  height: 36px;
  float: left;
  margin-top: 22px;
}
.header-icon img {
  width: 100%;
  height: 100%;
}
.header-tab {
  float: right;
  height: 80px;
  line-height: 80px;
  text-align: right;
}
.header-tab ul li {
  margin-left: 40px;
  display: inline-block;
  list-style: none;
  position: relative;
}
.header-tab ul li a {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #4d4d4d;
}
.header-tab ul li a:hover {
  color: #1faef8;
}
.header-tab ul li span {
  margin-top: 10px;
  height: 2px;
  background: #1faef8;
  width: 35%;
  -webkit-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  -o-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  position: absolute;
  top: 45px;
  left: 0;
  opacity: 0;
}
.header-tab ul li:active span {
  width: 100%;
  opacity: 1;
}
/* 新闻主题 */
.news-page {
  width: 1000px;
  min-height: 560px;
  margin: 0 auto;
  margin-top: 90px;
}
.loading {
  position: relative;
  width: 100%;
}
.news-page-on {
  width: 100%;
  min-height: 186px;
  border-bottom: 1px solid #e7e7e7;
  padding: 30px 0;
  cursor: pointer;
}
.news-page-on .left-img {
  width: 216px;
  height: 126px;
  float: left;
  margin-right: 20px;
  overflow: hidden;
}
.left-img img {
  width: 100%;
  height: 100%;
}
.news-page-on .mid-content {
  width: 500px;
  height: 126px;
  float: left;
  overflow: hidden;
  margin-right: 80px;
}
.mid-content p {
  font-size: 18px;
  font-weight: 500;
  height: 64px;
  line-height: 60px;
  color: #333;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mid-content p:hover {
  color: #1daef8;
}
.mid-content pre {
  font-size: 12px;
  color: #666;
  width: 100%;
  line-height: 22px;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
}
/* 分页 */
.pagination {
    position: relative;
}
.pagination li{
    display: inline-block;
    margin:0 5px;
}
.pagination li a{
    padding:.5rem 1rem;
    display:inline-block;
    border:1px solid #ddd;
    background:#fff;
    color:#0E90D2;
    text-decoration: none;
}
.pagination li a:hover{
    background:#eee;
}
.pagination li.active a{
    background:#0E90D2;
    color:#fff;
}
.news-page-on .right-date {
  float: right;
}
.right-date span {
  display: block;
  height: 78px;
  width: 170px;
  text-align: center;
  line-height: 78px;
  font-size: 20px;
  color: #333;
  border-left: 1px solid #e7e7e7;
  margin-top: 25px;
}
.pagination{
    width: 100%;
    text-align: center;
    margin: 70px 0;
}
/* 底部 */
.footer{
    min-width: 1200px;
    background-color: #262626;
}
.footer-content{
    width: 1200px;
    height: 390px;
    margin: 0 auto;
}
.footer-introduce{
    position: relative;
    height: 320px;
    padding-top: 44px;
    border-bottom: 1px solid #404040;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #848484;
}
.footer-introduce section{
    display: inline-block;
    vertical-align: text-top;
}
.footer-introduce .footer-introduce-produce{
    width: 401px;
    margin-right: 130px;
}
.footer-introduce section h3{
    height: 46px;
    font-size: 16px;
    color: #c5c5c5;
    text-align: left;
    vertical-align: sub;
}
.footer-introduce-produce li{
    position: relative;
    padding-left: 110px;
}
.footer-introduce-produce li span{
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;
    font-size: 14px;
}
.footer-introduce-produce li div{
    position: relative;
    top: -7px;
    line-height: 28px;
}
.footer-introduce-produce li a, .footer-introduce-produce li label {
    display: inline-block;
}
.footer-introduce a {
    color: #848484;
    font-size: 14px;
    text-decoration: none;
}
.footer-introduce-produce li b{
    display: inline-block;
    margin: 0 3px;
}
/* 关于我们 */
.footer-introduce-us{
    width: 80px;
}
.footer-introduce section > div{
    text-align: left;
}
.footer-introduce-us a{
    display: block;
    margin-bottom: 14px;
}
/* 社交账号 */
.footer-introduce-account[data-v-d9b79b32] {
    float: right;
    width: 210px;
}
/* 地址联系 */
.footer-introduce footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.footer-introduce-address{
    padding-bottom: 9px;
}
.footer-introduce-phone{
    font-size: 18px;
    font-weight: 500; 
}

</style>
