import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: {
      overrides: {
        'vue/no-multiple-template-root': 'off',
        'vue/block-lang': [
          'error',
          {
            script: {
              lang: 'ts',
            },
            style: {
              lang: 'scss',
            },
          },
        ],
      },
    },
  }),
)
