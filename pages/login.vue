
<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center"
    style="
      background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    "
  >
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div>
            <div>
              <span class="text-sm text-gray-900">{{ $t("welcome") }}</span>
              <h1 class="text-2xl font-bold">{{ $t("loginUser") }}</h1>
            </div>

            <div class="my-3">
              <label class="block text-md mb-2" for="email">Email</label>
              <input
                class="
                  px-4
                  w-full
                  border-2
                  py-2
                  rounded-md
                  text-sm
                  outline-none
                "
                v-model="userData.email"
                type="email"
                name="email"
                :placeholder="$t('emailPlaceholder')"
              />
            </div>
            <div class="mt-5">
              <label class="block text-md mb-2" for="password">Password</label>
              <input
                class="
                  px-4
                  w-full
                  border-2
                  py-2
                  rounded-md
                  text-sm
                  outline-none
                "
                v-model="userData.password"
                type="password"
                name="password"
                :placeholder="$t('passwordPlaceholder')"
              />
            </div>
            <div class="flex justify-between">
              <div>
                <input class="cursor-pointer" type="radio" name="rememberme" />
                <span class="text-sm">{{ $t("remember") }} password</span>
              </div>
              <span
                class="text-sm text-red-700 hover:underline cursor-pointer"
                >{{ $t("forgotPassword") }}</span
              >
            </div>
            <div class="">
              <button
                @click="logInUser(userData)"
                class="
                  mt-4
                  mb-3
                  w-full
                  bg-green-500
                  hover:bg-green-400
                  text-white
                  py-2
                  rounded-md
                  transition
                  duration-100
                "
              >
                {{ $t("loginButtonText") }}
              </button>
              <div
                class="
                  flex
                  space-x-2
                  justify-center
                  items-end
                  bg-gray-700
                  hover:bg-gray-600
                  text-white
                  py-2
                  rounded-md
                  transition
                  duration-100
                "
              >
                <img
                  class="h-5 cursor-pointer"
                  src="https://i.imgur.com/arC60SB.png"
                  alt=""
                />
                <button>{{ $t("loginGoogleButtonText") }}</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    userData: { email: "", password: "", showPassword: false },
  }),
  methods: {
    async logInUser(userData) {
	  console.log(userData);		
      try {
        await this.$auth.loginWith("local", {
          data: userData,
        });
        console.log("notification successful");
      } catch (error) {
        console.log("notification unsuccessful");
      }
    },
  },
};
</script>
