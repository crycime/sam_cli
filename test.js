describe('match', () => {
	it('sum', async () => {
		expect(1+2).toEqual(3)
	})
	it('sum', async () => {
		expect(1+2).toEqual(3)
	})
})


const time = second => {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(5)
		}, second * 1000)
	})
}
