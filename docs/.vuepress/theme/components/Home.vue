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
    <header class="hero" :style="`background: url(${$withBase(data.heroImage)}) no-repeat top center`">
      <!-- <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      > -->
      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>
      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div class="structure wrapper" style="margin-top: -300px;">
      <h1>
        {{ data.structure.text }}
      </h1>
      <div class="divider" />
      <div class="sub-text">
        {{ data.structure.subText }}
      </div>
      <div class="intro">
        <div class="text">
          <div class="title">
            {{ data.structure.title }}
          </div>
          <div v-for="item in data.structure.descriptions" :key="item" class="description">
            {{ item }}
          </div>
          <NavLink
            class="action-button"
            :item="moreActionLink"
          />
        </div>
        <div class="image">
          <img
            v-if="data.structure.image"
            :src="$withBase(data.structure.image)"
            alt="structure"
            style="width: 100%;"
          >
        </div>
      </div>
    </div>
    <div 
      v-if="data.features"
      class="wrapper features"
    >
      <h1>
        {{ data.features.text }}
      </h1>
      <div class="divider" />
      <div class="sub-text">
        {{ data.features.subText }}
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

    <div
      v-if="data.cases"
      class="wrapper cases">
      <h1>
        {{ data.cases.text }}
      </h1>
      <div class="divider" />
      <div class="sub-text">
        {{ data.cases.subText }}
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
      <div class="pure_top">
        <CustomFooter style="z-index: 1; position: relative; padding: 3rem 0rem" />
      </div>
    </footer>
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import CustomFooter from "@theme/components/Footer.vue";
export default {
  name: 'Home',
  components: { NavLink, CustomFooter },
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
  .hero
    background-color rgb(247, 247, 249)
    color: rgb(76, 110, 165)
    padding: 6em 2em 2em 2em
    text-align center
    height 1100px
    img
      max-width: 100%
      max-height 200px
      display block
      margin 0 auto 1.5rem
    h1
      font-size 2.8rem
      color #333333
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-size 1.6rem
      line-height 1.3
      color #999999
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      box-shadow 0 8px 12px 0 rgba(81,105,172,0.27)
      background-color #5169AC
      padding 0.4rem 1.6rem
      border-radius 10px
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color lighten(#5169AC, 10%)
  .wrapper
    box-sizing: border-box
    max-width: 1280px
    padding: 2em 2em 2em 2em
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    h1
      font-size 2rem
      text-align center
      color #5169AC
    .sub-text
      font-size 2rem
      text-align center
      color #CCCCCC
      padding: 0.7rem 0rem
    .divider 
      height 2px
      width 580px
      margin 0 auto
      opacity 0.05
      background-image radial-gradient(50% 100%, #000000 50%, #D8D8D8 100%)
  .structure
    .intro
      padding-top 2rem
      display flex
      flex-direction row
      align-items flex-start
      justify-content center
      .text
        padding 3rem 0rem 0rem
        flex-basis 35%
        .title
          color #333333
          line-height 4rem
          font-size 1.6rem
          font-weight bold
        .description
          padding 1.3rem 4rem 0rem 0rem
          font-size 1.2rem
          line-height 1.6rem
          color #999999
        .action-button
          margin-top 2rem
          display inline-block
          font-size 1.2rem
          color #fff
          box-shadow 0 8px 12px 0 rgba(81,105,172,0.27)
          background-color #5169AC
          padding 0.4rem 1.6rem
          border-radius 10px
          transition background-color .1s ease
          box-sizing border-box
          &:hover
            background-color lighten(#5169AC, 10%)
      .image
        background #FFFFFF
        box-shadow 0 0 20px 0 rgba(81,105,172,0.10)
        border-radius 16px
        padding 1rem
        flex-basis 65%
        &:hover
          box-shadow 0 0 20px 0 rgba(81,105,172,0.30)
  .features
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
          background #FFFFFF
          box-shadow 0 0 20px 0 rgba(81,105,172,0.10)
          border-radius 16px
          &:hover
            box-shadow 0 0 20px 0 rgba(81,105,172,0.30)
          img
            height 3.6rem
            padding 2.2rem
        .label
          font-size 1.2rem
          font-weight 500
          border-bottom none
          color #333333
          height 4rem
          padding-top 1rem
          margin 0 auto
          text-align center
  .cases
    .list
      padding 0.5rem 0
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      justify-content flex-start
      .case
        flex-grow 1
        flex-basis 16%
        max-width 16%
        padding: 1rem 0rem
        text-align center
        img 
          width 80%
          margin 0 auto
  .footer
    text-align center
    color lighten($textColor, 25%)
    padding 3rem 0rem 0rem
    .pure_top 
      width 100%
      height 27rem
      position relative
      z-index 0
      overflow hidden
      &:after
        content ''
        width 120%
        height 27rem
        position absolute
        left -10%
        top 0
        border-radius 100% 100% 0 0
        background #F7F7F9
@media (max-width: $MQMobile)
  .home
    .hero
      h1
        font-size 2rem
        color #333333
      .description
        font-size 1.2rem
    .wrapper
      h1
        font-size 1.6rem
      .sub-text
        font-size 1.6rem
      .divider 
        width 380px
    .structure
      .intro
        flex-direction column
        align-items center
        justify-content flex-start
        .text
          order 1
          flex-basis 100%
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
          flex-basis 30%
          max-width 30%
    .footer
      .pure_top 
        height 30rem
        &:after
          content ''
          width 200%
          height 30rem
          position absolute
          left -50%
          top 0
          border-radius 50% 50% 0 0
          background #F7F7F9
</style>