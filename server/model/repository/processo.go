package repository

import (
	"encoding/json"
	"fmt"
	"github.com/abnerdsilva/desafio-consulta-processual/model"
	"io/ioutil"
	"log"
)

const Db = "../DB/processos.json"

type ProcessoRepository interface {
	CreateProcesso(processo *model.Processo) (*[]model.Processo, error)
	GetProcessos() ([]model.Processo, error)
}

type processoRepository struct{}

func NewProcessoRepository() ProcessoRepository {
	return &processoRepository{}
}

func (p *processoRepository) CreateProcesso(processo *model.Processo) (*[]model.Processo, error) {
	process, err := p.GetProcessos()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	for _, proc := range process {
		if proc.NrCNJ == processo.NrCNJ {
			return nil, fmt.Errorf("processo já cadastrado")
		}
	}

	process = append(process, *processo)

	file, _ := json.MarshalIndent(process, "", " ")

	_ = ioutil.WriteFile(Db, file, 0644)
	return &process, nil
}

func (p *processoRepository) GetProcessos() ([]model.Processo, error) {
	arr := make([]model.Processo, 0)

	fs, err := ioutil.ReadFile(Db)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	var processos []model.Processo
	err = json.Unmarshal(fs, &processos)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	for _, value := range processos {
		arr = append(arr, value)
	}

	return arr, nil
}
