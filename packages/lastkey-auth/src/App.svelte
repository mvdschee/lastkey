<svelte:options tag="lastkey-auth" />

<script lang="ts">
    import { nanoid } from 'nanoid';
    import writeQR from '@paulmillr/qr';

    const svgqr = writeQR(nanoid(64), 'svg', {
        scale: 6,
    });
    const svg = svgqr.replaceAll('svg:rect', 'rect');
</script>

<main>
    <figure>
        {#if svg}
            {@html svg}
        {:else}
            <svg />
        {/if}
        <figcaption>Scan this QR code with your LastKey app</figcaption>
    </figure>
</main>

<style lang="scss">
    @import './styles/global';

    svg {
        fill: var(--color);
        width: 246px;
        height: 246px;
    }
</style>
