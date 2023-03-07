package model

import "github.com/google/uuid"

type Processo struct {
	UID           uuid.UUID            `json:"uid"`
	NrCNJ         string               `json:"nr_cnj"`
	DataInicio    string               `json:"data_inicio"`
	Descricao     string               `json:"descricao"`
	Tribunal      string               `json:"tribunal_origem"`
	VrCausa       float64              `json:"vr_causa"`
	Envolvidos    []ProcessoEnvolvidos `json:"envolvidos"`
	Movimentacoes []ProcessoHistorico  `json:"movimentacoes"`
}

type ProcessoEnvolvidos struct {
	Nome string `json:"nome"`
	Tipo int    `json:"tipo"`
}

type ProcessoHistorico struct {
	DataMovimentacao string `json:"data_movimentacao"`
	Descricao        string `json:"descricao"`
}
