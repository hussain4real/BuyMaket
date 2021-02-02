<template>
  <div>
    <main
      class="min-h-screen bg-gradient-to-tr from-teal-200 to-teal-400 flex items-center justify-center font-sans"
    >
      <section class="flex mhw glass min-h-3/4 w-2/3 bg-white rounded-3xl z-20">
        <div
          class="dashboard w-1/3 flex flex-col items-center justify-evenly text-center glass rounded-3xl py-8"
        >
          <div class="user">
            <img src="images/js.jpg" alt="user" class="rounded-full" />
            <h3>El Hussain</h3>
            <p>Pro member</p>
          </div>
          <div class="links">
            <div class="link flex my-8 py-4 px-20 items-center">
              <img src="images/twitch.png" alt="twitch" />
              <h2 class="px-8 text-blue-300 font-medium opacity-80">Streams</h2>
            </div>
            <div class="link flex my-8 py-4 px-20 items-center">
              <img src="images/steam.png" alt="games" />
              <h2 class="px-8 text-blue-300 font-medium opacity-80">Games</h2>
            </div>
            <div class="link flex my-8 py-4 px-20 items-center">
              <img src="images/upcoming.png" alt="new" />
              <h2 class="px-8 text-blue-300 font-medium opacity-80">New</h2>
            </div>
            <div class="link flex my-8 py-4 px-20 items-center">
              <img src="images/library.png" alt="library" />
              <h2 class="px-8 text-blue-300 font-medium opacity-80">Library</h2>
            </div>
          </div>
          <div
            class="pro bg-gradient-to-tr from-teal-300 to-teal-500 rounded-3xl flex items-center justify-center"
          >
            <h2 class="w-2/5 text-white font-semibold">
              Join pro for free games
            </h2>
            <img src="images/controller.png" alt="promotion" />
          </div>
        </div>
        <div class="games flex flex-col justify-evenly flex-1 m-10">
          <div class="status mb-6">
            <h1 class="text-blue-400 font-semibold text-5xl opacity-80">
              Active Games
            </h1>
            <input
              type="text"
              class="glass border-none w-2/4 p-2 rounded-3xl focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div class="cards">
            <div class="card" v-for="product in products" :key="product.id">
              <img src="images/assassins.png" alt="product" />
              <div class="card-info">
                <h2 class="px-8 text-teal-500 font-medium opacity-80">
                  {{ product.name }}
                </h2>
                <p
                  v-for="category in product.categories"
                  :key="category.id"
                  v-text="category.name"
                ></p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage px-8 text-teal-500 font-medium opacity-80">
                60%
              </h2>
            </div>
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
    products: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="css" scoped>
.mhw {
  backdrop-filter: blur(2rem);
}
.card {
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  justify-content: space-between;
  text-align: center;
}
.progress {
  width: 100%;
  height: 25%;
  margin-left: 1rem;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(236, 236, 236);
  position: absolute;
  left: 60%;
}
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  color: #658ec6;
  font-weight: 400;
  opacity: 0.8;
}
h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}
</style>
