<template>
    <main class="page-main">
        <ElementsScanner />
    </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $spacing;

    h1 {
        text-align: center;
        margin-top: $spacing * 2;
    }
}
</style>
