export default function dataHoraAtual() {
    let data = new Date();
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear().toString().padStart(4, '0');
    let hora = data.getHours().toString().padStart(2, '0');
    let minutos = data.getMinutes().toString().padStart(2, '0');
  
    return `${dia}/${mes}/${ano} - ${hora}:${minutos}`;
  }