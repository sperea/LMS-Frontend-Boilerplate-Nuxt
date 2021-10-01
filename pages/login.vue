<!-- pages/login.vue -->
<!-- This contains the login form. You should also add some custom validation yourself. -->
<template>
<!-- Create By Joker Banny -->
<div class="min-h-screen bg-no-repeat bg-cover bg-center"
	style="background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')">
    
	<div class="flex justify-end">
		<div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
			<div>

				<form>
					<div>
						<span class="text-sm text-gray-900">Bienvenido a la web de formación</span>
						<h1 class="text-2xl font-bold">Ingresa con tu cuenta de usuario</h1>
					</div>

						<div class="my-3">
							<label class="block text-md mb-2" for="email">Email</label>
							<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email">
                        </div>
        				<div class="mt-5">
						    <label class="block text-md mb-2" for="password">Password</label>
						    <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
                        </div>
						<div class="flex justify-between">
							<div>
								<input class="cursor-pointer"  type="radio" name="rememberme">
								<span class="text-sm">Recordar</span>
							</div>
							<span class="text-sm text-blue-700 hover:underline cursor-pointer">he olvidado mi contraseña</span>
						</div>
						<div class="">
								<button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Acceder</button>
								<div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100"">

            <img class=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="">
									<button >Acceder con cuenta de Google</button>
								</div>
							</div>
				</form>
				<p class="mt-8"> ¿No tienes una cuenta? <span class="cursor-pointer text-sm text-blue-600"> Date de alta</span></p>
			</div>
		</div>
	</div>
</div>
</div>

</template>

<script>
export default {
  data: () => ({
    userData: { email: "", password: "", showPassword: false },
  }),
  methods: {
    async logInUser(userData) {
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