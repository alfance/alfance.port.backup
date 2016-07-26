// $(function() {
//
//     $("html, body").mousewheel(function(event, delta) {
//         var mult = 1;
//         var $this = $(this);
//         if (event.timeStamp - $this.data('oldtimeStamp') < 1000) {
//             //calculate easing here
//             mult = 1000 / (event.timeStamp - $this.data('oldtimeStamp'));
//         }
//         $this.data('oldtimeStamp', event.timeStamp);
//         this.scrollLeft -= (delta) * mult;
//         event.preventDefault();
//     });
// });
