<template>
  <div class="background" v-on:mousedown.self="$emit('closepopup')">
    <div class="card c-popup">
      <div class="popup-title">
        <div>{{title}}</div>
        <div
          class="popup-close"
          v-on:click.stop="$emit('closepopup')"
        >
          <div class="popup-close-img"></div>
        </div>
      </div>
      <hr />
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PopUpMain',
  data() {
    return {
    }
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>
.background {
  background-color: rgba(0, 0, 0, 0.39);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.c-popup {
  background-color: white;
  min-width: 50%;
  max-width: 80%;
}
.popup-title {
  margin-top: 0.7rem;
  margin-left: 0.7rem;
  margin-right: 0.4rem;
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
}
.popup-close {
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
}
@media (any-hover: hover) {
  .popup-close:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.popup-close:active {
  background-color: rgba(0, 0, 0, 0.35);
}
.popup-close-img {
  width: 1.5rem;
  height: 1.5rem;
  background-image: url("~bootstrap-icons/icons/x.svg");
  background-position: center;
  background-size: contain;
}
.popup-content {
  margin: 1.5rem;
}
</style>
