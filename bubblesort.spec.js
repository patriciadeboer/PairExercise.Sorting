describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single item', function() {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('handles multiple items', function() {
    expect(bubbleSort([7, 4, 9, 2])).toEqual([2, 4, 7, 9]);
  });

  it('swaps the expected number of times', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([7, 4, 9, 2]);
    expect(swap.calls.count()).toEqual(12);
  });
});
