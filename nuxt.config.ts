// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
      ],
    css: [
            'bootstrap/dist/css/bootstrap.min.css',
            '~/assets/styles/main.scss',
        ],
        script: [
            {
                src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
            }
        ],
        vite: {
            define: {
                'process.env.DEBUG': false,
            },
        },
        
})
