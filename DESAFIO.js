var mensagemSecreta = [
  'Aprender',
  'nao',
  'é',
  'o',
  'sobre',
  'que',
  'você',
  'consegue', 
  'facilmente',
  'na',
  'primeira', 
  'vez',
  'mas',
  'sobre',
  'o',
  'que',
  'você', 
  'pode',
  'descobrir',
  '-2015',
  'Chris',
  'Pine',
  'Aprenda',
  'JavaScript',
]
mensagemSecreta.pop();
mensagemSecreta.push('a');
mensagemSecreta.push('programar');
mensagemSecreta.splice(8, 1, 'certo');
mensagemSecreta.shift();
mensagemSecreta.unshift('Programação');
mensagemSecreta.splice(7,5, 'sabe');
mensagemSecreta.splice(3,1, 'sobre');
mensagemSecreta.splice(4,1, 'o');
console.log(mensagemSecreta.join(''));

