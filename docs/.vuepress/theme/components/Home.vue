<!-- 
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <!-- <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      > -->
      <div class="header-wrapper" style="position: relative;">
        <div id="scene1" style="height: 100%; position: absolute;">
          <img :src="$withBase(data.heroBgImage)"
              data-depth="0.2" style="height: 100%;">
        </div>
        <div class="intro" style="z-index: 1;">
          <div class="text">
            <div
              v-for="item in data.heroText"
              :key="item"
              class="title"
            >
              {{ item || $title || 'Hello' }}
            </div>
            <div
              v-if="data.tagline !== null"
              class="description"
            >
              {{ data.tagline || $description || 'Welcome to your VuePress site' }}
            </div>
            <p
              v-if="data.actionText && data.actionLink"
              class="action"
            >
              <NavLink
                class="action-button"
                :item="actionLink"
              />
            </p>
          </div>
          <div 
            class="image" id="scene"
          >
            <img
              data-hover-only="true"
              data-depth="0.4"
              data-relative-input="true"
              :src="$withBase(data.heroImage)"
            >
          </div>
        </div>
      </div>
    </header>

    <div class="structure wrapper" style="margin-top: 0px;">
      <div class="image">
        <img
          v-if="data.structure.image"
          :src="$withBase(data.structure.image)"
          alt="structure"
          style="width: 100%;"
        >
      </div>
      <div class="text">
        <div class="title">
          {{ data.structure.title }}
        </div>
        <div class="sub-title">
          {{ data.structure.subTitle }}
        </div>
        <div v-for="item in data.structure.descriptions" :key="item" class="description">
          {{ item }}
        </div>
        <NavLink
          class="action-button"
          :item="moreActionLink"
        />
      </div>
    </div>
    <div 
      v-if="data.features"
      class="features"
    >
      <div class="wrapper">
        <div class="title">
          {{ data.features.title }}
        </div>
        <div class="sub-title">
          {{ data.features.subTitle }}
        </div>
        <div class="list">
          <div
            v-for="(feature, index) in data.features.list"
            :key="index"
            class="feature"
          >
            <div class="icon-card">
              <img
                v-if="feature.icon"
                :src="$withBase(feature.icon)"
                alt="feature"
              >
            </div>
            <div class="label">
              {{ feature.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="data.cases"
      class="wrapper cases">
      <div class="title">
        {{ data.cases.title }}
      </div>
      <div class="sub-title">
        {{ data.cases.subTitle }}
      </div>
      <div class="list">
        <div
          v-for="(cese, index) in data.cases.list"
          :key="index"
          class="case"
        >
          <img
            v-if="cese.logo"
            :src="$withBase(cese.logo)"
            :alt="cese.alt"
          >
        </div>
      </div>
    </div>

    <footer class="footer">
      <CustomFooter />
    </footer>
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import CustomFooter from '@theme/components/Footer.vue'
import Parallax from 'parallax-js'
export default {
  name: 'Home',
  components: { NavLink, CustomFooter },
  mounted() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    var scene1 = document.getElementById('scene1');
    var parallaxInstance = new Parallax(scene1);
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    moreActionLink () {
      return {
        link: this.data.structure.actionLink,
        text: this.data.structure.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  overflow-x hidden
  padding 0 0
  width 100%
  margin 0px auto
  display block
  font-family PingFangSC-Regular
  .hero
    background-color #5A77F3
    color: rgb(76, 110, 165)
    padding: 0em
    text-align left
    height 760px
    .header-wrapper
      display flex
      flex-direction row
      justify-content center
      box-sizing: border-box
      margin-left auto
      margin-right auto
      width: 100%
      height 100%
      padding: 0rem 4rem
      .intro
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        width 1280px
        .text
          .title
            font-family PingFangSC-Semibold
            font-size 3.1rem
            color white
            letter-spacing 0
          .description
            font-family PingFangSC-Light
            padding 1.5rem 0rem 3rem
            opacity 0.85
            font-size 1.3rem
            color #FFFFFF
            letter-spacing 0.33px
          .action-button
            display inline-block
            font-size 1.2rem
            color white
            border: 1px solid #FFFFFF;
            padding 0.4rem 2.6rem
            transition background-color .1s ease
            &:hover
              color #5A77F3
              background-color white
        .image
          position relative
          flex-basis 50%
          img
            width 530px
  .wrapper
    box-sizing: border-box
    max-width: 1280px
    padding: 2em 2em 2em 2em
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    .title
      font-size 1.9rem
      text-align center
      color #595959
      font-family PingFangSC-Medium
    .sub-title
      text-align center
      font-family PingFangSC-Light
      font-size 1.3rem
      color #999999
      padding-top 1rem
    .divider 
      height 2px
      width 580px
      margin 0 auto
      opacity 0.05
      background-image radial-gradient(50% 100%, #000000 50%, #D8D8D8 100%)
  .structure
    padding 8rem 0rem 5rem
    display flex
    flex-direction row
    align-items flex-start
    justify-content center
    .text
      padding 3rem 4rem 0rem
      flex-basis 32%
      .title
        color #595959
        text-align left
        font-size 1.9rem
        font-family PingFangSC-Medium
      .sub-title
        text-align left
        font-family PingFangSC-Light
        font-size 1.3rem
        color #999999
        padding 0rem
        line-height 1.8rem
      .description
        padding 1.3rem 0rem 0rem 0rem
        font-size 0.9rem
        line-height 1.6rem
        color #595959
      .action-button
        margin-top 2rem
        display inline-block
        font-size 1rem
        color #5169AC
        border: 1px solid #5169AC
        padding 0.4rem 2.8rem
        transition background-color .1s ease
        box-sizing border-box
        &:hover
          color white
          background-color #5169AC
    .image
      flex-basis 68%
  .features
    padding 5rem 0rem
    background-color #F9FCFE
    .list
      padding-top 0.5rem
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      align-items flex-end
      align-content stretch
      justify-content space-between
      .feature
        flex-grow 1
        flex-basis 18%
        max-width 18%
        padding: 1rem
        .icon-card
          width 8rem
          height 8rem
          margin 0 auto
          img
            height 4rem
            padding 2rem
        .label
          font-size 1rem
          color #595959
          height 4rem
          margin 0 auto
          text-align center
          font-family: PingFangSC-Regular;
          color: #595959;
  .cases
    padding 5rem 0rem
    .list
      padding 0.5rem 0
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      justify-content flex-start
      .case
        flex-grow 1
        flex-basis 25%
        max-width 25%
        padding: 1rem 0rem
        text-align center
        img 
          width 80%
          margin 0 auto
  .footer
    background #F9F9F9
    text-align center
    color lighten($textColor, 25%)
    padding 3rem 0rem 5rem
@media (max-width: $MQMobile)
  .home
    .hero
      height 960px
      .header-wrapper
        .intro
          display flex
          flex-direction column
          align-items center
          justify-content flex-start
          .text
            padding 7rem 2rem 0rem 2rem
            text-align center
            .title
              font-size 2rem
            .description
              width 100%
              font-size 1.4rem
              color white
              opacity 0.6
          .image
            position relative
            flex-basis 100%
            width 100%
      h1
        font-size 2rem
        color #333333
      .description
        font-size 1.2rem
    .wrapper
      title
        font-size 1.6rem
      .sub-title
        font-size 1.6rem
      .divider 
        width 380px
    .structure
      flex-direction column
      align-items center
      justify-content flex-start
      .text
        order 1
        flex-basis 100%
        text-align center
        .title
          text-align center
        .sub-title
          text-align center
        .description
          padding 1.3rem 0rem 0rem 0rem
      .image
        order 0
        flex-basis 100%
    .features
      .list
        .feature 
          flex-basis 40%
          max-width 40%
    .cases
      .list
        justify-content space-between
        .case
          flex-basis 50%
          max-width 50%
</style>