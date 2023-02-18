<template>
    <div class="layout-intro">
        <slot />
        <BaseFooter />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout-intro {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--background);

    .footer {
        margin-top: auto;
    }
}
</style>
