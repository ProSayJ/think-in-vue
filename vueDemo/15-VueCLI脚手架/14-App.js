var data = {
    name: "Bukcy"
}
Vue.component("greeting", {
    /*模板里面有且仅有一个标签*/
    template: `<p>
        {{name}}: 大家好，给大家介绍一下我的vue@Vue
        <button v-on:click="changeName"> 改名</button>
        </p>`,
    data: function () {
        return {
            name: "ProSayJ"
        }
        //return data;
    },
    methods: {
        changeName: function () {
            this.name = "Henry";
        }
    }
})
/*实例化vue对象*/
new Vue({
    el: "#vue-app-one",
});
new Vue({
    el: "#vue-app-two",
});

/**
 * el:element 需要获取的元素，一定是html中的根容器元素。通过vue容器对Dom进行操作
 * data:用于数据存储。本质上是个对象。存储 k-v。
 * methods:用于存储各种方法。
 * data-binding:给属性绑定对应的直。
 * */
