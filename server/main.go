package main

import (
	"github.com/abnerdsilva/desafio-consulta-processual/controller"
	"github.com/abnerdsilva/desafio-consulta-processual/model/repository"
	"github.com/gin-gonic/gin"
)

func main() {
	dbFile := "../../../DB/processos.json"

	processRepo := repository.NewProcessoRepository(dbFile)
	processControll := controller.NewProcessoController(processRepo)

	router := gin.Default()
	router.GET("/process", processControll.GetProcessos)
	router.GET("/process/:id", processControll.GetProcesso)
	router.POST("/process", processControll.CreateProcesso)

	router.Run(":8787")
}
