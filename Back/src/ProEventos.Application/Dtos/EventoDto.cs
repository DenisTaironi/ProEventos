using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
        public string Local { get; set; }
        public string DataEvento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatótio!"),
        StringLength(50, MinimumLength = 3, ErrorMessage = "{0} deve possuir de 3 a 50 caractéres")]
        public string Tema { get; set; }

        [Display(Name = "quantidade de pessoas"),
        Required(ErrorMessage = "O campo {0} é obrigatótio!"),
        Range(1,120000, ErrorMessage = "{0} não pode ser menor que 1 e maior que 120.000")]
        public int QtdPessoas { get; set; }

        [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$", ErrorMessage = "Não é uma imagem válida (.gif, .jpeg, .jpg, .png, .bmp)")]
        public string ImagemURL { get; set; }

         [Required(ErrorMessage = "O campo {0} é obrigatótio!"),
         Phone(ErrorMessage = "O campo {0} está com númro inválido.")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatótio!"),
        Display(Name = "e-mail"),
        EmailAddress(ErrorMessage = "O campo {0} precisa ser um e-mail válido!")]
        public string Email { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }
        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }
        public IEnumerable<PalestranteDto> Palestrantes { get; set; }
    }
}