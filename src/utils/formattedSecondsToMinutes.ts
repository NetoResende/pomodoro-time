export function formattesSecondsToMinutes( seconds: number){
  const minutos = String(Math.floor( seconds / 60 )).padStart(2, '0');
  const segundos = String(Math.floor( seconds % 60 )).padStart(2, '0');
  return `${minutos}:${segundos}`
}