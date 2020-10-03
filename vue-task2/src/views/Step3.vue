<template>
  <div>
    <div id="info">
      <div id="header">
        <p id="header-step">STEP3</p>
        <h2 id="header-title">
          <span id="fa-card"
            ><font-awesome-icon icon="chalkboard-teacher"
          /></span>
          ご相談内容をご記入ください
        </h2>
      </div>
      <div id="form">
        <p class="form-title">-ご相談内容-</p>
        <textarea
          id="form-text_area"
          :value="message"
          @input="updateMessage"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <div id="btn-box">
      <button class="next-btn" @click="returnStep">
        前へ戻る<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
      <button class="next-btn">
        次へ進む<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    updateMessage(e) {
      this.$store.commit("updateMessage", e.target.value);
    },
    returnStep() {
      this.$router.push("/step2");
    },
  },
};
</script>

<style scoped>
#info {
  width: 60%;
  margin: 30px auto;
  border: 1px solid rgb(129, 209, 209);
}

/* ---- header ----*/
#header {
  position: relative;
  background-color: rgb(215, 243, 243);
  border-bottom: 1px solid rgb(129, 209, 209);
}
#header-step {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  color: white;
  background-color: rgb(49, 153, 219);
}
#fa-card {
  margin-right: 4px;
}
#header-title {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  color: #4a4a4a;
}

/* ---- form ----*/
#form {
  padding: 20px;
  color: #4a4a4a;
}
.form-title {
  font-size: 14px;
  font-weight: normal;
  color: rgb(79, 132, 171);
}
#form-text_area {
  width: 100%;
}

/* footer-btn */
#btn-box {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.next-btn {
  display: inline-block;
  margin: 0 20px 0 20px;
  max-width: 120px;
  width: 25%;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: rgb(0, 209, 178);
  border: none;
  border-radius: 3px;
}
#fa-angle {
  margin-left: 16px;
}
</style>
