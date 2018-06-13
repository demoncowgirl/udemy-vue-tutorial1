new Vue ({
	el: '#app',
  	data:{
    	counter1: 0,
			x: 0,
			y: 0,
			counter2: 0,
			counter3: 0
    },

		methods:{

			increaseCounter1: function(){
				// increases counter by 1
				this.counter1++;
				},

				increaseCounter2: function(step, event){
					// increase counter by argument passed in html
					this.counter2 += step;
					},

			updateCoordinates: function(event){
				this.x = event.clientX;
				this.y =event.clientY;
			},

			dummy: function(event){
				// stops event from happening in any other elements above it
				event.stopPropagation();
			},

			alertMe: function(){
				alert('Alert!');
			}
		}
});
