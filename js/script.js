var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Mac Calc!',
		display: 0,
		arithmetic: null,
		inputArithmetic: false,
		preNum: false,
		currentNum: 0,
		inversed: false,
		result: 0,

	},
	methods: {
		number: function(event) {
			if (this.inputArithmetic) {
				this.display = 0
				this.inputArithmetic = false
			}

			let display = event.target.innerHTML

			if (this.display == 0) {
				this.display = display
			} else {
				this.display += display
			}

			this.currentNum = parseInt(this.display)

		},
		ac: function() {
			this.display = 0
			this.currentNum = null
			this.result = 0
		},
		inverse: function() {

			if (this.inversed) {
				this.currentNum = this.display
			}

			this.currentNum = -this.currentNum
			this.display = this.currentNum
			this.result = this.display

			this.inversed = true

		},
		plus: function() {

			this.calculator('plus')

		},
		minus: function() {

			this.calculator('minus')

		},
		times: function() {

			this.calculator('times')

		},
		divide: function() {

			this.calculator('divide')

		},
		equal: function() {

			this.calculator('equal')

		},
		calculator: function(e) {

			if (this.inputArithmetic == true) {
				this.arithmetic = (e) // -の直後+押したら

			} else if (this.preNum) {

				if (this.arithmetic == 'plus') {
					this.result = this.result + this.currentNum

				} else if (this.arithmetic == 'minus') {
					this.result = this.result - this.currentNum
				} else if (this.arithmetic == 'times') {
					this.result = this.result * this.currentNum
				} else if (this.arithmetic == 'divide') {
					this.result = this.result / this.currentNum
				} else if (this.arithmetic == 'equal') {
					this.result = this.currentNum
				}

			} else if (this.currentNum) {
				this.result = this.currentNum
			}

			this.display = this.result
			this.inputArithmetic = true
			this.preNum = this.currentNum
			this.arithmetic = (e)
		}
	}
})


