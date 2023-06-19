<template>
    <button 
        class="btn-cta"
        :style="{background: bg_color}"
        :alt="alt">
    {{ text }}    
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String,
                default: 'This is a button'
            },
            bg_color: 'blue',
            alt: 'default alt',
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/scss/utilities/' as *;

    .btn-cta {
        width: 100%;
        padding-block: rem(12);
        border-radius: rem(8);
        color: var(--clr-neutral-l-gray-violet);
    }
</style>