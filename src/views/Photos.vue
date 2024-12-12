<template>
  <div class="photos">
    <!-- 页面标题区域 -->
    <section class="page-header py-16">
      <v-container>
        <h1 class="text-h3 font-weight-bold text-center mb-6" data-aos="fade-up">
          照片墙
        </h1>
        <!-- 相册分类 -->
        <v-chip-group
          v-model="selectedAlbum"
          class="justify-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <v-chip
            v-for="album in albums"
            :key="album.id"
            :value="album.id"
            filter
            variant="elevated"
            :color="selectedAlbum === album.id ? 'primary' : undefined"
            :class="{
              'category-chip': true,
              'category-chip--selected': selectedAlbum === album.id
            }"
          >
            <v-icon start>{{ album.icon }}</v-icon>
            {{ album.name }}
          </v-chip>
        </v-chip-group>
      </v-container>
    </section>

    <!-- 照片网格 -->
    <section class="photo-grid pb-16">
      <v-container>
        <v-row>
          <v-col
            v-for="photo in filteredPhotos"
            :key="photo.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            data-aos="zoom-in"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="photo-card"
                :elevation="isHovering ? 8 : 0"
                @click="openPhotoDialog(photo)"
              >
                <v-img
                  :src="photo.url"
                  :lazy-src="photo.thumbnail"
                  aspect-ratio="1"
                  cover
                  class="rounded-lg"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary" />
                    </v-row>
                  </template>
                  <!-- 悬浮信息 -->
                  <div
                    class="photo-overlay d-flex flex-column justify-end pa-4"
                    :class="{ 'show-overlay': isHovering }"
                  >
                    <div class="photo-info">
                      <h3 class="text-h6 text-white mb-2">{{ photo.title }}</h3>
                      <div class="d-flex align-center">
                        <v-icon color="white" size="small" class="mr-2">
                          mdi-calendar
                        </v-icon>
                        <span class="text-caption text-white">{{ photo.date }}</span>
                        <v-spacer />
                        <v-icon
                          :color="photo.liked ? 'red' : 'white'"
                          size="small"
                          class="mr-1"
                          @click.stop="toggleLike(photo)"
                        >
                          {{ photo.liked ? 'mdi-heart' : 'mdi-heart-outline' }}
                        </v-icon>
                        <span class="text-caption text-white">{{ photo.likes }}</span>
                      </div>
                    </div>
                  </div>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <!-- 加载更多按钮 -->
        <div class="text-center mt-8">
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
            @click="loadMore"
            :loading="loading"
            data-aos="fade-up"
          >
            加载更多
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- 照片详情对话框 -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card v-if="selectedPhoto">
        <v-img
          :src="selectedPhoto.url"
          :aspect-ratio="16/9"
          cover
        />
        <v-card-title>{{ selectedPhoto.title }}</v-card-title>
        <v-card-text>
          <p class="mb-4">{{ selectedPhoto.description }}</p>
          <div class="d-flex align-center">
            <v-icon color="primary" size="small" class="mr-2">
              mdi-calendar
            </v-icon>
            <span class="text-caption">{{ selectedPhoto.date }}</span>
            <v-spacer />
            <v-btn
              icon
              variant="text"
              :color="selectedPhoto.liked ? 'red' : undefined"
              @click="toggleLike(selectedPhoto)"
            >
              <v-icon>
                {{ selectedPhoto.liked ? 'mdi-heart' : 'mdi-heart-outline' }}
              </v-icon>
            </v-btn>
            <span class="text-body-2 ml-2">{{ selectedPhoto.likes }}</span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 相册分类
const albums = [
  { id: 'all', name: '全部', icon: 'mdi-image-multiple' },
  { id: 'nature', name: '自然', icon: 'mdi-forest' },
  { id: 'city', name: '城市', icon: 'mdi-city' },
  { id: 'life', name: '生活', icon: 'mdi-camera' }
]

const selectedAlbum = ref('all')
const loading = ref(false)
const dialog = ref(false)
const selectedPhoto = ref(null)

// 模拟照片数据
const photos = ref([
  {
    id: 1,
    title: '山间晨雾',
    description: '清晨的山谷被薄雾笼罩，宁静而神秘...',
    url: 'https://picsum.photos/seed/photo1/800/800',
    thumbnail: 'https://picsum.photos/seed/photo1/400/400',
    albumId: 'nature',
    date: '2024-03-15',
    likes: 128,
    liked: false
  },
  {
    id: 2,
    title: '城市夜景',
    description: '霓虹闪烁的都市夜景，展现现代都市的魅力...',
    url: 'https://picsum.photos/seed/photo2/800/800',
    thumbnail: 'https://picsum.photos/seed/photo2/400/400',
    albumId: 'city',
    date: '2024-03-12',
    likes: 96,
    liked: false
  },
  {
    id: 3,
    title: '咖啡时光',
    description: '享受午后时光，一杯咖啡的悠闲时刻...',
    url: 'https://picsum.photos/seed/photo3/800/800',
    thumbnail: 'https://picsum.photos/seed/photo3/400/400',
    albumId: 'life',
    date: '2024-03-10',
    likes: 75,
    liked: false
  }
])

// 根据相册筛选照片
const filteredPhotos = computed(() => {
  if (selectedAlbum.value === 'all') {
    return photos.value
  }
  return photos.value.filter(photo => photo.albumId === selectedAlbum.value)
})

// 打开照片详情
const openPhotoDialog = (photo) => {
  selectedPhoto.value = photo
  dialog.value = true
}

// 切换点赞状态
const toggleLike = (photo) => {
  photo.liked = !photo.liked
  photo.likes += photo.liked ? 1 : -1
}

// 加载更多照片
const loadMore = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newPhotos = [
    {
      id: photos.value.length + 1,
      title: '新的照片',
      description: '这是一张新加载的照片...',
      url: `https://picsum.photos/seed/photo${photos.value.length + 1}/800/800`,
      thumbnail: `https://picsum.photos/seed/photo${photos.value.length + 1}/400/400`,
      albumId: 'nature',
      date: '2024-03-01',
      likes: Math.floor(Math.random() * 100) + 20,
      liked: false
    }
  ]
  
  photos.value.push(...newPhotos)
  loading.value = false
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.page-header {
  background: linear-gradient(to right, rgba($primary-color, 0.1), rgba($accent-color, 0.1));
}

.photo-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  &.show-overlay {
    opacity: 1;
  }
}

.photo-info {
  transform: translateY(20px);
  transition: transform 0.3s ease;

  .show-overlay & {
    transform: translateY(0);
  }
}

.category-chip {
  color: rgb(var(--v-theme-on-surface)) !important;
  
  &--selected {
    color: white !important;
  }

  &:hover {
    opacity: 0.8;
  }

  .v-icon {
    color: inherit;
  }
}
</style> 