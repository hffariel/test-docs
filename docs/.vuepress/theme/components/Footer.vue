<template>
  <div class="footer-wrapper">
    <br />
    <span class="footer-text">© Copyright 2019, Apache Doris(Incubating)</span>
    <br />
    <span
      class="footer-text"
    >
    Apache Doris(incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.footer-wrapper 
  max-width $contentWidth
  text-align: center
  margin 0 auto
  padding 2rem 2.5rem
  color: rgb(93, 93, 93)
  font-weight: 240

@media (min-width: $MQMobile)
  .footer-wrapper 
    padding 2rem
    .footer-text
      font-size: 13px
@media (max-width: $MQMobile)
  .footer-wrapper 
    padding 1.5rem
    .footer-text
      font-size: 12px;
</style>