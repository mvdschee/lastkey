<template>
    <div class="user">
        <button class="btn-clear user-btn">
            <span v-html="useAvatar(accountName)"></span>
            <p>{{ accountName }}</p>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useAvatar } from '@mvdschee/use';

const accountName = 'Max';
</script>

<style lang="scss">
.user-btn {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    > span {
        display: block;
        width: 1.4rem;
        height: 1.4rem;
    }
}
</style>
