<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="
            flex
            justify-between
            items-center
            border-b-2 border-gray-100
            py-6
            md:justify-start md:space-x-10
          "
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="~/assets/img/logo.png"
                alt=""
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-red-500
              "
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <div class="relative">
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {{ $t("myCourses") }}
              </a>
            </div>

            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {{ $t("allCourses") }}
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              F.A.Q.
            </a>

            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {{ $t("help") }}
            </a>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-base
                font-medium
                text-white
                bg-red-600
                hover:bg-red-700
              "
            >
              {{ $t("logout") }}
            </a>
          </div>
        </div>
      </div>
      <div
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-red-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </a>
            </div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-red-600
                  hover:bg-red-700
                "
              >
                Mi perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      globalItems: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
      ],
      authenticatedItems: [
        {
          title: "Sair",
          icon: "logout",
          to: { name: "logout" },
        },
      ],
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
};
</script>
