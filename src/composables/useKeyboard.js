import { onMounted, onUnmounted } from 'vue'

export function useKeyboard(shortcuts) {
  const handleKeydown = (event) => {
    const shortcut = shortcuts.find(s => {
      const keysMatch = s.key === event.key
      const ctrlMatch = s.ctrl ? event.ctrlKey : !event.ctrlKey
      const altMatch = s.alt ? event.altKey : !event.altKey
      const shiftMatch = s.shift ? event.shiftKey : !event.shiftKey
      
      return keysMatch && ctrlMatch && altMatch && shiftMatch
    })

    if (shortcut) {
      event.preventDefault()
      shortcut.handler(event)
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
} 