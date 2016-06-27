describe('capitalize filter', function() {
  beforeEach(module('app'));

  it('should put first letter in capital', angular.mock.inject(function (capitalizeFilter) {
    expect(capitalizeFilter('Hello')).toBe(0);
  }));
});
