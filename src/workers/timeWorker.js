self.onmessage = function(event){
  console.log('WORKER recebeu', event.data)

  switch( event.data ){
    case 'FAVOR': {
      self.postMessage("Sim, Posso te fazer um favor!")
      break;
    }
    case 'FALA_OI': {
      self.postMessage("OI!")
      break;
    }
    case 'ENCERRAR': {
      self.postMessage("OK! vou encerrar agora")
      self.close()
      break;
    }
    default: {
      self.postMessage("Não endentir")
    }
  }
}