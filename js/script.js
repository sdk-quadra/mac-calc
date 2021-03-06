var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Mac Calc!',
		display: 0,
		arithmetic: null,
		inputArithmetic: false,
		inputDot: false,
		preNum: false,
		currentNum: 0,
		result: 0,
	},
	methods: {
		number: function(event) {
			if (this.inputArithmetic) {
				this.display = 0
				this.inputArithmetic = false
			}

			const display = event.target.innerHTML

			if (this.display == 0 && display !== '.' && !this.inputDot) {

				this.display = parseFloat(display)

			} else if (display == '.' && !this.inputDot) {

				this.display += '.'
				this.inputDot = true

			} else if (display !== '.') {
				console.log(display)
				this.display += display
			}

			this.currentNum = parseFloat(this.display)

		},
		ac: function() {
			this.display = 0
			this.currentNum = null
			this.result = 0
		},
		inverse: function() {

			this.calculator('inverse')
			this.result = -this.result
			this.display = this.result

		},
		percent: function() {

			this.calculator('percent')
			this.result /= 100
			this.display = this.result

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
			this.inputDot = false
			this.preNum = this.currentNum
			this.arithmetic = (e)
		}
	}
})


