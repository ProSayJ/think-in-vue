/*实例化vue对象*/
new Vue({
    el: "#vue-app",
    data: {
        changeColor: false,
        changeLength: false
    },
    methods: {},
    computed: {
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});
/**
 * el:element 需要获取的元素，一定是html中的根容器元素。通过vue容器对Dom进行操作
 * data:用于数据存储。本质上是个对象。存储 k-v。
 * methods:用于存储各种方法。
 * data-binding:给属性绑定对应的直。
 * */
