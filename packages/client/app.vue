<template>
    <div class="app">
        <Teleport to="body">
            <div data-tauri-drag-region class="titlebar"></div>
        </Teleport>
        <BaseSprite />
        <span v-if="loading" class="loading-page"></span>
        <NuxtLayout>
            <NuxtPage
                :transition="{
                    name: 'page',
                    mode: 'out-in',
                }"
            />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const loading = useLoading();
</script>

<style lang="scss">
.titlebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    user-select: none;
    cursor: grab;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
        cursor: grabbing;
    }
}
</style>
