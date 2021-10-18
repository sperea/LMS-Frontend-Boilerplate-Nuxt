import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16a25c82 = () => interopDefault(import('../pages/all-courses.vue' /* webpackChunkName: "pages/all-courses" */))
const _c34b7d70 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6801e45f = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _35689ff8 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _2b67b391 = () => interopDefault(import('../pages/my-courses.vue' /* webpackChunkName: "pages/my-courses" */))
const _327fe41d = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all-courses",
    component: _16a25c82,
    name: "all-courses___es"
  }, {
    path: "/en",
    component: _c34b7d70,
    name: "index___en"
  }, {
    path: "/login",
    component: _6801e45f,
    name: "login___es"
  }, {
    path: "/logout",
    component: _35689ff8,
    name: "logout___es"
  }, {
    path: "/my-courses",
    component: _2b67b391,
    name: "my-courses___es"
  }, {
    path: "/register",
    component: _327fe41d,
    name: "register___es"
  }, {
    path: "/en/all-courses",
    component: _16a25c82,
    name: "all-courses___en"
  }, {
    path: "/en/login",
    component: _6801e45f,
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _35689ff8,
    name: "logout___en"
  }, {
    path: "/en/my-courses",
    component: _2b67b391,
    name: "my-courses___en"
  }, {
    path: "/en/register",
    component: _327fe41d,
    name: "register___en"
  }, {
    path: "/",
    component: _c34b7d70,
    name: "index___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
