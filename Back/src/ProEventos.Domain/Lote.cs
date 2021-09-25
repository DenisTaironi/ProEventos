using System;

namespace ProEventos.Domain
{
    public class Lote
    {
        public int Id { get; set; }
        public string nome { get; set; }
        public decimal Preco { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public int Quantidade { get; set; }
        public int EventoId { get; set; }
        public Evento evento { get; set; }
    }
}