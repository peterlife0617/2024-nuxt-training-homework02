declare module '#app' {
  interface NuxtApp {
    $bootstrap?: typeof bootstrap
  }
}

export {}
