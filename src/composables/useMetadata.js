import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useMetadata() {
  const route = useRoute()
  const title = ref('')
  const description = ref('')
  const keywords = ref('')
  const image = ref('')

  const updateMetadata = ({
    newTitle,
    newDescription,
    newKeywords,
    newImage
  }) => {
    if (newTitle) {
      title.value = newTitle
      document.title = `${newTitle} - 个人博客`
    }
    
    if (newDescription) {
      description.value = newDescription
      document.querySelector('meta[name="description"]')?.setAttribute('content', newDescription)
    }
    
    if (newKeywords) {
      keywords.value = newKeywords
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', newKeywords)
    }
    
    if (newImage) {
      image.value = newImage
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', newImage)
    }
  }

  // 监听路由变化自动更新元数据
  watch(() => route.meta, (newMeta) => {
    if (newMeta.metadata) {
      updateMetadata(newMeta.metadata)
    }
  }, { immediate: true })

  return {
    title,
    description,
    keywords,
    image,
    updateMetadata
  }
} 