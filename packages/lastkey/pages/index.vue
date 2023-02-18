<template>
    <main class="page-welcome">
        <h1>Welcome to Lastkey</h1>
        <NuxtLink class="link" to="/app">App</NuxtLink>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'intro',
});
</script>

<style lang="scss">
.page-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-top: $spacing * 2;
    }
}
</style>
