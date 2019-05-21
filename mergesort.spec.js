describe('Split Array function', function() {
  it('handles an empty array', function() {
    expect(split([])).toEqual([]);
  });

  it('handles a single item', function() {
    expect(split([5])).toEqual([5]);
  });

  it('is able to split an array into two halves when the array has an even number of elements', function() {
    // your code here
    expect(split([2, 6, 7, 3])).toEqual([[2, 6], [7, 3]]);
  });

  it('is able to split an array into two halves when the array has an odd number of elements', function() {
    // your code here
    expect(split([2, 6, 7, 3, 1])).toEqual([[2, 6], [7, 3, 1]]);
  });
});

describe('Split Array function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // your code here
    expect(merge([2, 6, 7, 9], [1, 3, 4])).toEqual([1, 2, 3, 4, 6, 7, 9]);
  });
});
