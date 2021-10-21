using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        /// <summary>
        /// méto get que retornara uma lista de lotes por evento id
        /// </summary>
        /// <param name="eventoId">código chave da tabela evento</param>
        /// <returns>array de lotes</returns>
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);
        /// <summary>
        /// método get que retornará apenas um lote
        /// </summary>
        /// <param name="eventoId">código chave da tabela evento</param>
        /// <param name="id">código chave da tabela lote</param>
        /// <returns>apenas um lote</returns>
        Task<Lote> GetLoteByIdsAsync(int eventoId, int id);
    }
}