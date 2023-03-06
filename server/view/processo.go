package view

import "github.com/abnerdsilva/desafio-consulta-processual/model"

type Processo struct {
	NrCNJ string `json:"nr_cnj"`
	Data  string `json:"data_inicio"`
}

func ConvertProcessoToView(processo *[]model.Processo) *[]Processo {
	var process []Processo

	for _, pr := range *processo {
		var p Processo
		p.NrCNJ = pr.NrCNJ
		p.Data = pr.DataInicio

		process = append(process, p)
	}

	return &process
}
