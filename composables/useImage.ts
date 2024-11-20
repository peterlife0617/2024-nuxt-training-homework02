export function useImage() {
  const { public: {
    NUXT_APP_BASE_URL,
  } } = useRuntimeConfig()

  const assetsImgaes: Record<string, string> = import.meta.glob('@/assets/images/**/*', { eager: true, import: 'default' })
  const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/$/, '')

  const publicImage = (url: string) => `${normalizeBaseUrl(NUXT_APP_BASE_URL)}${url}`
  const assetImage = (url: string) => {
    const key = Object.keys(assetsImgaes).find(key => key.includes(url))
    return key ? assetsImgaes[key] : ''
  }

  return {
    publicImage,
    assetImage,
  }
}
