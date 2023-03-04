<template>
    <div class="app">
        <BaseSprite />
        <span v-if="loading" class="loading-app"></span>
        <NuxtPage
            :transition="{
                name: 'app',
                mode: 'out-in',
            }"
        />
    </div>
</template>

<script setup lang="ts">
const loading = useLoading();
</script>

<style lang="scss">
.app {
    height: 100vh;
}

.loading-app {
    display: block;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
        91.99deg,
        var(--primary-1) 1%,
        var(--primary-2) 80%
    );
    animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 0.8;
    }

    50% {
        opacity: 0.5;
    }
}
</style>
