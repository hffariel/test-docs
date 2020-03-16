<template>
  <div class="footer-container">
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
<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.footer-text {
  color: rgb(93, 93, 93);
  font-size: 13px;
  font-weight: 240;
  text-align: center;
  width: 60%;
}
</style>