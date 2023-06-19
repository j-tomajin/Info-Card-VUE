<template>
    <Cards 
        :user_name="user_name"
        :card_num="card_num" />

    <InputField
        :isValidName="isValidName"
        @check-user-name="checkUserName"
        
        :isValidCardNumber="isValidCardNumber"
        @check-card-number="checkCardNumer"/>
    
    
    <ThankyouPage />
</template>

<script>
    import Cards from './components/Cards.vue';
    import InputField from './components/InputField.vue';
    import ThankyouPage from './components/ThankyouPage.vue';

    export default {
    name: "App",
    components: { 
        Cards,
        InputField,
        ThankyouPage,
    },
    data: function() {
        return {
            user_name: '',
            isValidName: true,
            card_num: '',
            isValidCardNumber: true,
        }
    },
    methods: {
        checkUserName(user_name) {
            if(!user_name) {
                this.isValidName = false
            } else {
                this.user_name = user_name
                this.isValidName = true
            }
        },

        checkCardNumer(card_num) {
            if(/^\d+$/.test(card_num)) {
                this.card_num = card_num
                this.isValidCardNumber = true
            } else {
                this.isValidCardNumber = false
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>