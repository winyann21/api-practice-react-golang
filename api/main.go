package main

import (
	"sorting/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())
	routes.InitRoutes(r)

	r.Run(":5000") // listen and serve on 0.0.0.0:5000
}
