var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Mac Calc!',
		display: 0,
		arithmetic: null,
		inputArithmetic: false,
		inputNum: false,
		preNum: false,
		currentNum: 0,
		result: 0
	},
	methods: {
		number: function(event) {
			if (this.inputArithmetic) { this.display = 0; this.inputArithmetic = false}

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
		plus: function() {

			if (this.inputArithmetic == true) {
				this.arithmetic = ('plus')

			} else if (this.preNum) {

				if (this.arithmetic == 'plus') {
					this.result = this.result + this.currentNum

				} else if (this.arithmetic == 'minus') {
					this.result = this.result - this.currentNum
				}

			} else if (this.currentNum) {
				this.result = this.currentNum
			}

			this.display = this.result

			this.inputArithmetic = true

			this.preNum = this.currentNum

			this.arithmetic = ('plus')
		},
		minus: function() {

			if (this.inputArithmetic == true) {
				this.arithmetic = ('minus')

			} else if (this.preNum) {

				if (this.arithmetic == 'plus') {
					this.result = this.result + this.currentNum

				} else if (this.arithmetic == 'minus') {
					this.result = this.result - this.currentNum
				}

			} else if (this.currentNum) {
				this.result = this.currentNum
			}

			this.display = this.result

			this.inputArithmetic = true

			this.preNum = this.currentNum

			this.arithmetic = ('minus')
		},
		arithmeticStatus: function(e) {
			this.arithmeticStatus = e
		}
	}
})


