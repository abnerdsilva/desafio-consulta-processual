package controller

import (
	"encoding/json"
	"fmt"
	"github.com/abnerdsilva/desafio-consulta-processual/model"
	"github.com/abnerdsilva/desafio-consulta-processual/model/repository"
	"github.com/abnerdsilva/desafio-consulta-processual/view"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
)

func NewProcessoController(processoRepository repository.ProcessoRepository) ProcessoControllerInterface {
	return &processoController{processoRepository}
}

type ProcessoControllerInterface interface {
	CreateProcesso(c *gin.Context)
	GetProcessos(c *gin.Context)
}

type processoController struct {
	processoRepository repository.ProcessoRepository
}

func (pc *processoController) CreateProcesso(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "POST")

	var tempProcesso model.Processo
	decoder := json.NewDecoder(c.Request.Body)
	err := decoder.Decode(&tempProcesso)
	if err != nil {
		fmt.Printf("error %s", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}
	tempProcesso.UID = uuid.New()

	err = pc.ValidProcesso(&tempProcesso)
	if err != nil {
		err2 := view.ParseError(fmt.Sprintf("Erro na validação do processo -> %s", err), http.StatusBadRequest)
		c.JSONP(err2.Code, err2)
		return
	}

	createdProcess, err := pc.processoRepository.CreateProcesso(&tempProcesso)
	if err != nil {
		err2 := view.ParseError(fmt.Sprintf("Erro na criação do processo -> %s", err), http.StatusBadRequest)
		c.JSONP(err2.Code, err2)
		return
	}

	c.JSONP(http.StatusOK, view.ConvertProcessoToView(createdProcess))
}

func (pc *processoController) GetProcessos(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "GET, OPTIONS")

	processos, err := pc.processoRepository.GetProcessos()
	if err != nil {
		log.Print(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "erro consulta processos"})
		return
	}

	c.JSON(http.StatusOK, processos)
}

func (p *processoController) ValidProcesso(processo *model.Processo) error {
	if processo.NrCNJ == "" {
		return fmt.Errorf("nr_cnj é um campo obrigatório")
	}
	if processo.DataInicio == "" {
		return fmt.Errorf("data_inicio é um campo obrigatório")
	}
	if processo.Tribunal == "" {
		return fmt.Errorf("tribunal é um campo obrigatório")
	}

	return nil
}
