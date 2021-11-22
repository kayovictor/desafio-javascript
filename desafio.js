//desafio 
var pedraPapelEtesoura = 'tesoura corta papel, papel cobre veneno, pedra esmaga lagarto, lagarto corta Spock, Spock vaporiza tesoura, tesoura decapita Spock, lagarto come papel, veneno refuta lagarto, Spock vaporiza pedra, veneno esmaga tesoura.'
var torcarDeString = pedraPapelEtesoura.replace(/esmaga/gi, "quebra");
var torcarDeString01 = torcarDeString.replace(/lagarto/gi, 'tesoura');
var torcarDeString02 = torcarDeString01.replace(/Spock/gi, 'papel');
var torcarDeString03 = torcarDeString02.replace(/vaporiza/gi, 'embrulha');
var torcarDeString04 = torcarDeString03.replace(/cobre/gi, 'embrulha');
var torcarDeString05 = torcarDeString04.replace(/decapita/gi, 'corta');
var torcarDeString06 = torcarDeString05.replace(/come/gi, 'corta');
var torcarDeString07 = torcarDeString06.replace(/veneno/gi, 'pedra');
var torcarDeString08 = torcarDeString07.replace(/refuta/gi, 'quebra');
console.log(torcarDeString08);