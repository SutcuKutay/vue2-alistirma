new Vue({
    el: '#app',
    data: {
        name: 'Kutay',
        googleURL: 'https://www.google.com.tr',
        sahibindenURLTag: '<a href="https://www.sahibinden.com">Sahibinden.com git.</a>',
        age: 22,
        x: 0,
        y: 0,
    },
    methods: {
        welcome: function(page){
            return 'Welcome ' + page + ' ' + this.name;
        },
        addAge: function(increment){
            this.age += increment;
        },
        subtractAge: function(decrement){
            this.age -= decrement;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    },
});