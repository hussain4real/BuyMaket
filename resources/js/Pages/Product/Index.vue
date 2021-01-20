<template>
  <div>
    <main
      class="min-h-screen bg-gradient-to-tr from-teal-200 to-teal-400 flex items-center justify-center"
    >
      <section class="mhw glass bg-white rounded-lg z-20">
        <div class="dashboard">
          <div class="user">
            <h3>El Hussain</h3>
            <p>Pro member</p>
          </div>
          <div class="links">
            <div class="link">
              <h2>link1</h2>
            </div>
            <div class="link">
              <h2>link2</h2>
            </div>
            <div class="link">
              <h2>link3</h2>
            </div>
            <div class="link">
              <h2>link4</h2>
            </div>
          </div>
          <div class="pro">
            <h2>Join pro now</h2>
          </div>
        </div>
      </section>
    </main>

    <div
      class="circle1 bg-white glass h-52 w-52 absolute top-20 right-40 rounded-full"
    ></div>
    <div
      class="circle2 bg-white glass h-52 w-52 absolute -bottom-20 left-36 rounded-full"
    ></div>
  </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
export default {
  layout: AppLayout,

  props: {
    products: Object,
  },
};
</script>

<style lang="css" scoped>
.mhw {
  min-height: 80vh;
  width: 60%;
  backdrop-filter: blur(2rem);
}
</style>
