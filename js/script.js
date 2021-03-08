Vue.component('todo-items', {
		template: '<li>this is template. please edit this.</li>'
})

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		lists: [
			{list: 'kobe'},
			{list: 'osaka'},
			{list: 'shiga'}
		],
		display: 0,
		arithmetic: null,
		inputFinish: false,
		preNum: null,
		currentNum: null
	},
	methods: {
		swapPrefecture: function(){
			this.lists = [
				{list: 'nara'},
				{list: 'mie'},
				{list: 'wakayama'}
			]
		},
		number: function(event) {
			// arithmeticに値があったら、0表示
			if (this.inputFinish) { this.display = 0; this.inputFinish = false}
			let display = event.target.innerHTML
			this.display += display
			this.display = parseInt(this.display)

			this.currentNum = display
		},
		ac: function() {
			this.display = 0
		},
		plus: function() {
			if (this.arithmetic == 'plus' && this.preNum) {
				this.display = parseInt(this.preNum) + parseInt(this.currentNum)
			}


			this.arithmetic = 'plus',
			this.inputFinish = true
			this.preNum = this.currentNum
		}
	}
})


