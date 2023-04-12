<template>
    <div class="scanner">
        <svg role="presentation" focusable="false" aria-hidden="true">
            <use xlink:href="#scan" />
        </svg>
        <video ref="videoElem"></video>
    </div>
    <p v-if="data">{{ data }}</p>
</template>

<script setup lang="ts">
import QrScanner from 'qr-scanner';

const videoElem = ref();
let qrScanner: QrScanner | null = null;

const data = ref();

onMounted(async () => {
    if (await QrScanner.hasCamera()) {
        qrScanner = new QrScanner(
            videoElem.value,
            (result) => (data.value = result.data),
            {}
        );

        qrScanner.start();
    } else {
        console.log('no camera found');
    }
});

onUnmounted(() => {
    if (qrScanner) {
        qrScanner.destroy();
        qrScanner = null;
    }
});
</script>

<style lang="scss">
.scanner {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    border: 1px solid var(--border);
    border-radius: $radius;
    background-color: var(--background);
    overflow: hidden;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        z-index: 1;
        animation: scale 2s infinite;
    }

    video {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: $radius;
    }

    p {
        color: var(--color);
    }

    @keyframes scale {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }
}
</style>
