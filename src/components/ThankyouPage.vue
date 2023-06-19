<template>
    <div class="thankyou">
        <div class="complete-sign">
            <img :src="icon" alt="check">
        </div>
    
        <div class="text">
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
        </div>
    
        <Button 
            text="Continue" 
            bg_color="var(--clr-neutral-v-dark-violet)"
            alt="Continue-button" />
    </div>
</template>

<script>
    import icon from '../assets/images/icon-complete.svg'

    import Button from './Button.vue';

    export default {
        name: 'ThankyouPage',
        components: {
            Button,
        },
        data: function() {
            return {
                icon: icon,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/scss/utilities/' as *;

    .thankyou {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(16);

        text-align: center;
    }
</style>