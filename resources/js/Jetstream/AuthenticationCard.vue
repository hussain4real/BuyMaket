<template>
  <div
    class="min-h-screen decoration flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-indigo-900"
  >
    <div>
      <slot name="logo" />
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 content overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.decoration::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fa9d74, #eb0069);
  clip-path: polygon(30% 10%, 50% 40%, 30% 75%, 10% 40%);
}
.decoration::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f50202, #1928f5);
  clip-path: circle(20% at 70% 75%);
}
.content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  overflow: hidden;
  z-index: 10;
  backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
}
</style>
