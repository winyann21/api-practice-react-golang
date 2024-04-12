package tests

import (
	"sorting/helpers"
	"testing"
)

func TestSortItems(t *testing.T) {
	//test bubble sort
	t.Run("Bubble Sort", helpers.TestBubbleSort)

	//test merge sort
	t.Run("Merge Sort", helpers.TestMergeSort)
}
