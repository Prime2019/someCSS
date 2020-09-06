<template>
  <div>
    <!-- 8种hover效果 -->
    <!-- 第一种 -->
    <div id="send-btn">
      <button class="button1">
        <!-- 这里是svg图 -->
        <img src="../../assets/logo.png" />
        Send
      </button>
    </div>

    <!-- 第二种 -->
    <div id="neon-btn">
      <button class="button2 one">Hover me</button>
      <button class="button2 two">Hover me</button>
      <button class="button2 three">Hover me</button>
    </div>

    <!-- 第三种 -->
    <div id="draw-border">
      <button class="button3">Hover me</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 第一种 */
#send-btn {
  display: flex;
  height: 40px;
}
.button1 {
  background: #5f55af;
  border: 0;
  border-radius: 5px;
  padding: 10px 30px 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
.button1 img {
  display: inline-block;
  width: 23px;
  vertical-align: middle;
  padding-right: 5px;
}
.button1:hover img {
  animation: fly 2s ease 1;
}
@keyframes fly {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 第二种 */
#neon-btn {
  display: flex;
  margin-top: 10px;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  background: #031628;
}
.button2 {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}
.one {
  color: #4cc9f0;
}
.two {
  color: #f038ff;
}
.three {
  color: #b9e769;
}
.button2:hover {
  color: white;
  border: 0;
}
.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
}
.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}
.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}

/* 第三种 */
#draw-border {
  margin-top: 10px;
  display: flex;
  height: 40px;
}
.button3 {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}
.button3::before,
.button3::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.button3::after {
  bottom: 0;
  right: 0;
}
.button3::before {
  top: 0;
  left: 0;
}
.button3:hover::before,
.button3:hover::after {
  width: 100%;
  height: 100%;
}
.button3:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}
.button3:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
    height 0.3s ease-out 1s;
}
</style>
