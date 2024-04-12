package models

type SortItemsParams struct {
	Items []string `json:"items" binding:"required,gt=0"`
	Type  string   `json:"type"`
}
