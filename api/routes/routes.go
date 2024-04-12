package routes

import (
	"sorting/controllers"

	"github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {
	r.POST("/items/sort", controllers.SortItems)
}
