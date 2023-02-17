<template>
    <footer class="footer">
        <span>
            <svg role="presentation" focusable="false" aria-hidden="true">
                <use xlink:href="#name" />
            </svg>
        </span>
        <div>
            <small
                >© 2023
                <NuxtLink
                    href="https://maxvanderschee.nl"
                    target="_blank"
                    rel="noopener"
                    >Max van der Schee</NuxtLink
                >
                | MIT license.</small
            >
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer {
    border-top: 1px solid var(--border);
    position: relative;
    padding: $spacing $spacing * 2;

    span {
        position: absolute;
        top: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--background);
        padding: 0 $spacing * 2;
    }

    small {
        color: var(--color-alt);
    }

    svg {
        width: 5rem;
        aspect-ratio: 2 / 1;
    }
}
</style>
