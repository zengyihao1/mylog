<template>
  <div class="settings">
    <section class="page-header py-16">
      <v-container>
        <h1 class="text-h3 font-weight-bold text-center mb-6" data-aos="fade-up">
          设置
        </h1>
      </v-container>
    </section>

    <section class="settings-content pb-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="mb-6" elevation="0" variant="outlined">
              <v-card-title class="d-flex align-center">
                <v-icon icon="mdi-palette" class="mr-2" />
                外观
              </v-card-title>
              <v-card-text>
                <v-list>
                  <!-- 主题模式 -->
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon :icon="themeStore.isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'" />
                    </template>
                    <v-list-item-title>主题模式</v-list-item-title>
                    <template v-slot:append>
                      <v-btn-toggle
                        v-model="themeStore.themeSource"
                        mandatory
                        density="comfortable"
                      >
                        <v-btn value="light" variant="text">
                          浅色
                        </v-btn>
                        <v-btn value="system" variant="text">
                          跟随系统
                        </v-btn>
                        <v-btn value="dark" variant="text">
                          深色
                        </v-btn>
                      </v-btn-toggle>
                    </template>
                  </v-list-item>

                  <!-- 字体大小 -->
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-format-size" />
                    </template>
                    <v-list-item-title>字体大小</v-list-item-title>
                    <template v-slot:append>
                      <v-select
                        v-model="settingsStore.settings.fontSize"
                        :items="[
                          { title: '小', value: 'small' },
                          { title: '中', value: 'medium' },
                          { title: '大', value: 'large' }
                        ]"
                        density="comfortable"
                        hide-details
                        variant="plain"
                      />
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <v-card class="mb-6" elevation="0" variant="outlined">
              <v-card-title class="d-flex align-center">
                <v-icon icon="mdi-animation" class="mr-2" />
                动画效果
              </v-card-title>
              <v-card-text>
                <v-list>
                  <!-- 动画开关 -->
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-animation-play" />
                    </template>
                    <v-list-item-title>启用动画</v-list-item-title>
                    <template v-slot:append>
                      <v-switch
                        v-model="settingsStore.settings.animations"
                        hide-details
                        density="comfortable"
                        color="primary"
                      />
                    </template>
                  </v-list-item>

                  <!-- 自动播放视频 -->
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-play-circle" />
                    </template>
                    <v-list-item-title>自动播放视频</v-list-item-title>
                    <template v-slot:append>
                      <v-switch
                        v-model="settingsStore.settings.autoPlayVideos"
                        hide-details
                        density="comfortable"
                        color="primary"
                      />
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <v-card elevation="0" variant="outlined">
              <v-card-title class="d-flex align-center">
                <v-icon icon="mdi-bell" class="mr-2" />
                通知
              </v-card-title>
              <v-card-text>
                <v-list>
                  <!-- 通知开关 -->
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-bell-ring" />
                    </template>
                    <v-list-item-title>启用通知</v-list-item-title>
                    <template v-slot:append>
                      <v-switch
                        v-model="settingsStore.settings.notificationsEnabled"
                        hide-details
                        density="comfortable"
                        color="primary"
                      />
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'
import { useSettingsStore } from '@/stores/settings'

const themeStore = useThemeStore()
const settingsStore = useSettingsStore()
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.page-header {
  background: linear-gradient(to right, rgba($primary-color, 0.1), rgba($accent-color, 0.1));
}

.settings-content {
  :deep(.v-list-item) {
    min-height: 64px;
  }
}
</style> 