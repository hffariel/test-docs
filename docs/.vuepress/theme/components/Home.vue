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
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >
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

    <div class="structure wrapper">
      <h1>
        Apache Doris
      </h1>
      <img
        v-if="data.structureImage"
        :src="$withBase(data.structureImage)"
        alt="structure"
        style="width: 100%;"
      >
    </div>
    <div style="width: 100%; background-color: #f7f7f9;">
      <div 
        v-if="data.features && data.features.length"
        class="wrapper"
      >
        <h1 v-if="data.featuresText">
          {{ data.featuresText }}
        </h1>
        <div class="features">
          <div
            v-for="(feature, index) in data.features"
            :key="index"
            class="feature"
          >
            <h2>
              {{ feature.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <h1 v-if="data.casesText">
        {{ data.casesText }}
      </h1>
      <div class="cases">
        <div
          v-for="(cese, index) in data.cases"
          :key="index"
          class="case"
        >
          <img
            v-if="cese.logo"
            :src="cese.logo"
            :alt="'image'"
            style="height: 34px;"
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
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 0 0
  width 100%
  margin 0px auto
  display block
  .hero
    background-color rgb(247, 247, 249)
    color: rgb(76, 110, 165)
    padding: 4em 2em 2em 2em
    text-align center
    img
      max-width: 100%
      max-height 200px
      display block
      margin 0 auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-size 1.6rem
      line-height 1.3
      color lighten(rgb(76, 110, 165), 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color rgb(76, 110, 165)
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken(rgb(76, 110, 165), 10%)
      &:hover
        background-color lighten(rgb(76, 110, 165), 10%)
  .wrapper
    box-sizing: border-box
    max-width: 1280px
    padding: 2em 2em 2em 2em
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  .features
    padding 0.5rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-end
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 45%
    max-width 45%
    padding: 1rem
    border-bottom 1px solid $borderColor
    h2
      font-size 1.0rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
      &:before
        content "";
        width 0.4rem;
        height 0.4rem;
        margin-right 0.5rem;
        margin-top 0.5rem;
        display block;
        float left;
        background-color $textColor;
    p
      color lighten($textColor, 25%)
  .cases
    padding 0.5rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-end
    align-content stretch
    justify-content flex-start
  .case
    flex-grow 1
    flex-basis 20%
    max-width 20%
    padding: 1rem 0rem
    text-align center
  .footer
    background-color #f7f7f9
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
      align-items flex-start
    .feature
      max-width 100%
      padding 0 2.5rem
    .case
      flex-basis 45%
      max-width 45%
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .wrapper
      h1
        font-size: 2rem
    .feature
      h2
        font-size 1.25rem
    .case
      flex-basis 45%
      max-width 45%
</style>