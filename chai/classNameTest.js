describe('addClass', function() {
	it('should add class to element', function () {
		let element = {className: ''};
		addClass(element, 'test-class');
		assert.equal(element.className, 'test-class');

	});
	it('should not add a class which already exists', function() {
		let element = {className: 'test-class'};
		addClass(element, 'test-class');
		assert.equal(element.className, 'test-class');
	});
	it('should not append class name after existing one', function() {
		let element = {className: 'existed'};
		addClass(element, 'not-existed');
		assert.equal(element.className, 'existed');
	});
});
