<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__contact-info">
        <div class="contact-info__p">
          <p>СПбГУТ, 2022</p>
          <p>тут почта или контакты</p>
        </div>
        <div class="contact-info__image">
          <img src="./../../resources/Vector.png" alt="" />
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
  background: #333333;
  height: 245px;
  width: 100%;
}
.footer__content {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
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
@media (max-width: 1366px) {
  .footer {
    height: 172px;
  }
  .footer__content {
    padding-top: 52px;
  }
  .footer__contact-info {
    width: 200px;
  }
  .footer__contact-info p {
    font-size: 13px;
    line-height: 120%;
    margin-bottom: 5px;
  }
  .footer__contact-info p:last-child {
    margin-bottom: 16px;
  }
  .footer__authors {
    width: 200px;
  }
  .authors__p p {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
@media (max-width: 768px) {
  .footer {
    height: 128px;
  }
  .footer__content {
    padding-top: 30px;
  }
  .footer__contact-info {
    width: 170px;
  }
  .footer__contact-info p {
    font-size: 13px;
    line-height: 120%;
    margin-bottom: 5px;
  }
  .footer__contact-info p:last-child {
    margin-bottom: 16px;
  }
  .footer__authors {
    width: 200px;
  }
  .authors__p p {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
@media (max-width: 425px) {
  .footer__contact-info {
    width: 150px;
  }
  .footer__contact-info p {
    margin-bottom: 3px;
  }
  .contact-info__image {
    width: 17px;
    height: 17px;
  }
  .footer__authors {
    width: 170px;
  }
}
</style>