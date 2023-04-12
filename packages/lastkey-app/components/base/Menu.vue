<template>
    <nav class="menu">
        <NuxtLink to="/">
            <svg role="presentation" focusable="false" aria-hidden="true">
                <use xlink:href="#inbox" />
            </svg>
        </NuxtLink>
        <NuxtLink to="/">
            <svg role="presentation" focusable="false" aria-hidden="true">
                <use xlink:href="#user" />
            </svg>
        </NuxtLink>
        <NuxtLink to="/new">
            <svg role="presentation" focusable="false" aria-hidden="true">
                <use xlink:href="#scan_face" />
            </svg>
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.menu {
    display: flex;
    justify-content: space-around;
    gap: $spacing * 2;
    height: 4rem;
    padding: $spacing * 0.5;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    svg {
        width: 100%;
        height: 100%;
    }

    a {
        width: $spacing * 2;
    }
}
</style>
