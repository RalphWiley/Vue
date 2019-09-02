// var card = new Vue({
//     el: "#card",
//     data: {
//       title: "Martin Scorsese",
//       items: [
//             { 
//                 text: "The King of Comedy",
//                 genre: "Drama"
//             },
//             { 
//                 text: "Kundun",
//                 genre: "Drama"
//             },
//             {   
//                 text: "New York, New York",
//                 genre: "Musical"
//             }
//       ],
//     },
//     methods: {
//         addItem: function(){
//             var input = document.getElementById('itemForm');

//             if (input.value !== ''){
//                 this.items.push({
//                     text: input.value
//                 })
//                 input.value = "";
//             }
//         },
//     },

//   });

  import Rating from './components/Rating.vue';
  new Vue({
      el: '#app',
      template: '<Rating :grade="2" />',
      components: { Rating }
  })
  