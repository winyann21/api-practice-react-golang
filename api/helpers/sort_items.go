package helpers

//SORT PATTERN INTERFACE
type SortPattern interface {
	SortItems([]string) []string
}

// BUBBLE SORT
type BubbleSort struct{}

func (bs BubbleSort) SortItems(items []string) []string {
	n := len(items)
	swapped := true
	for swapped {
		swapped = false
		for i := 1; i < n; i++ {
			if items[i-1] > items[i] {
				items[i], items[i-1] = items[i-1], items[i]
				swapped = true
			}
		}
		n--
	}

	var sortedItems []string
	sortedItems = append(sortedItems, items...)
	return sortedItems
}

// MERGE SORT
type MergeSort struct{}

func (ms MergeSort) SortItems(arr []string) []string {
	if len(arr) <= 1 {
		return arr
	}

	middle := len(arr) / 2
	left := ms.SortItems(arr[:middle])
	right := ms.SortItems(arr[middle:])

	return mergeString(left, right)
}

func mergeString(left, right []string) []string {
	result := make([]string, 0, len(left)+len(right))

	for len(left) > 0 || len(right) > 0 {
		if len(left) > 0 && len(right) > 0 {
			if left[0] <= right[0] {
				result = append(result, left[0])
				left = left[1:]
			} else {
				result = append(result, right[0])
				right = right[1:]
			}
		} else if len(left) > 0 {
			result = append(result, left[0])
			left = left[1:]
		} else if len(right) > 0 {
			result = append(result, right[0])
			right = right[1:]
		}
	}

	return result
}
