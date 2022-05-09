<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__contact-info">
        <div class="contact-info__p">
          <p>СПбГУТ, 2022</p>
          <p>тут почта или контакты</p>
        </div>
        <div class="contact-info__image">
          <img src="./../../res/Vector.png" alt="" />
        </div>
      </div>
      <div class="footer__authors">
        <div class="authors__p">
          <p>developed by Alina Krivonogova</p>
          <p>designed by zhilevsky</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerForPage",
};
</script>
<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #4f4f4f;
  height: 245px;
  width: 100%;
}
.footer__content {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.footer__contact-info {
  width: 300px;
  height: 100%;
}
.footer__contact-info p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #fafafa;
  margin-bottom: 8px;
}
.footer__contact-info p:last-child {
  margin-bottom: 33px;
}
.contact-info__image {
  width: 32px;
  height: 32px;
}
.contact-info__image img {
  width: 100%;
  height: 100%;
}
.footer__authors {
  width: 300px;
}
.authors__p p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 130%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #fafafa;
  margin-bottom: 7px;
}
</style>