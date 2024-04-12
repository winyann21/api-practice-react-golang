package controllers

import (
	"net/http"
	"sorting/constants"
	"sorting/helpers"
	"sorting/models"

	"github.com/gin-gonic/gin"
)

func SortItems(c *gin.Context) {
	var sortParams models.SortItemsParams
	err := c.ShouldBind(&sortParams)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to parse request body: " + err.Error(),
		})
		return
	}

	var sortPattern helpers.SortPattern
	var sortedItems []string
	if len(sortParams.Items) != 0 {
		// determine sorting method base on the provided type
		switch sortParams.Type {
		case constants.SORT_BUBBLE:
			sortPattern = helpers.BubbleSort{}
		case constants.SORT_MERGE:
			sortPattern = helpers.MergeSort{}
		default:
			sortedItems = sortParams.Items
		}
	}

	if sortPattern != nil {
		sortedItems = sortPattern.SortItems(sortParams.Items)
	}

	c.JSON(http.StatusOK, gin.H{
		"type":        sortParams.Type,
		"sortedItems": sortedItems,
	})
}
