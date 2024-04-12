package helpers

import (
	"reflect"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	// test cases for BubbleSort function
	testCases := []struct {
		name           string
		input          []string
		expectedOutput []string
	}{
		{
			name:           "Test Bubble Sort with unsorted input",
			input:          []string{"cat", "bat", "axe"},
			expectedOutput: []string{"axe", "bat", "cat"},
		},
	}

	// run the test cases
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			// perform the bubble sort
			bubbleSort := BubbleSort{}
			result := bubbleSort.SortItems(tc.input)

			// check if the result matches the expected output
			if !reflect.DeepEqual(result, tc.expectedOutput) {
				t.Errorf("unexpected result from BubbleSort: got %v, want %v", result, tc.expectedOutput)
			}
		})
	}
}

func TestMergeSort(t *testing.T) {
	// test cases for MergeSort function
	testCases := []struct {
		name           string
		input          []string
		expectedOutput []string
	}{
		{
			name:           "Test Merge Sort with unsorted input",
			input:          []string{"cat", "bat", "axe"},
			expectedOutput: []string{"axe", "bat", "cat"},
		},
	}

	// run the test cases
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			// Perform the merge sort
			mergeSort := MergeSort{}
			result := mergeSort.SortItems(tc.input)

			// check if the result matches the expected output
			if !reflect.DeepEqual(result, tc.expectedOutput) {
				t.Errorf("unexpected result from MergeSort: got %v, want %v", result, tc.expectedOutput)
			}
		})
	}
}
