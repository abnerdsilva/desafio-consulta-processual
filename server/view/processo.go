package view

import (
	"github.com/abnerdsilva/desafio-consulta-processual/model"
	"github.com/google/uuid"
)

type Processo struct {
	UID           uuid.UUID            `json:"uid"`
	NrCNJ         string               `json:"nr_cnj"`
	Data          string               `json:"data_inicio"`
	Descricao     string               `json:"descricao"`
	Tribunal      ProcessoTribunal     `json:"tribunal_origem"`
	Status        string               `json:"status"`
	NrInstancia   int                  `json:"nr_instancia"`
	VrCausa       float64              `json:"vr_causa"`
	Envolvidos    []ProcessoEnvolvidos `json:"envolvidos"`
	Movimentacoes []ProcessoHistorico  `json:"movimentacoes"`
}

type ProcessoEnvolvidos struct {
	Nome  string `json:"nome"`
	Tipo  int    `json:"tipo"`
	Local string `json:"local"`
}

type ProcessoTribunal struct {
	Nome string `json:"nome"`
	Tipo int    `json:"tipo"`
}

type ProcessoHistorico struct {
	UID              uuid.UUID `json:"uid"`
	DataMovimentacao string    `json:"data_movimentacao"`
	Descricao        string    `json:"descricao"`
}

func ConvertProcessoToView(processo *[]model.Processo) *[]Processo {
	var process []Processo

	for _, pr := range *processo {
		var envolvidos []ProcessoEnvolvidos
		for _, envolvido := range pr.Envolvidos {
			var tEnv = ProcessoEnvolvidos{
				Nome:  envolvido.Nome,
				Tipo:  envolvido.Tipo,
				Local: envolvido.Local,
			}

			envolvidos = append(envolvidos, tEnv)
		}

		var movimentacoes []ProcessoHistorico
		for _, mov := range pr.Movimentacoes {
			var tMov = ProcessoHistorico{
				DataMovimentacao: mov.DataMovimentacao,
				Descricao:        mov.Descricao,
			}

			movimentacoes = append(movimentacoes, tMov)
		}

		var p Processo
		p.UID = pr.UID
		p.NrCNJ = pr.NrCNJ
		p.Data = pr.DataInicio
		p.Descricao = pr.Descricao
		p.Tribunal.Nome = pr.Tribunal.Nome
		p.Tribunal.Tipo = pr.Tribunal.Tipo
		p.VrCausa = pr.VrCausa
		p.Envolvidos = envolvidos
		p.Movimentacoes = movimentacoes

		process = append(process, p)
	}

	return &process
}
