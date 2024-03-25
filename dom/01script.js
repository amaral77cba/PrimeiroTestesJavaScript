//getElementById  retorna um (element)
const element = document.getElementById('blog-title')
console.log(element)


//getElementByClassName() retorna um (HTMLCollection) possibilita selecionar varios elementos pelo nome da classe
const nomeelement = document.getElementsByClassName("nomeclasse")
console.log(nomeelement)


//getElementsByTagName()  retorna um (HTMLCollection)
const element2 = document.getElementsByTagName('meta')
console.log(element2)

//querySelector()  retorna um (element)  pega a primeira ocorrencia encontrada na pagina
const element3 = document.querySelector('[src]')
console.log(element3)

//querySelectorAll() retorna um (NodeList)   pega todas ocorrencias encontradas e eh possivel fazer for each diferente do getElementsByClassName
const element4 = document.querySelectorAll('.nomeclasse')
element4.forEach(el => console.log(el))



//textContent
const element5 = document.querySelector('h1')
console.log(element5)
element5.textContent += " Ola rapaziada"    
console.log(element5.textContent)

//innerText
const element6 = document.querySelector('h1')
console.log(element6)
element6.innerText = "Olah Devs"    //troca o texto interno pelo valor atribuido

//innerHTML
const element7 = document.querySelector('.nomeclasse2')
console.log(element7)
element7.innerHTML = "Segundo Paragrafo <small>!!!</small>" //possibilita acrescentar instrucoes html ao elemento


//value
const element8 = document.querySelector('input')
console.log(element8.value) //busca o valor que estah no codigo
element8.value = "Novo valor qualquer"   //atribui um novvo valor
console.log(element8)

//manipulando elementos
//header
const header = document.querySelector('header')
header.setAttribute("id", "header") //atribui uma probriedade a uma TAG
headerId = document.querySelector('#header')
console.log(headerId)
console.log(header.getAttribute("id"))  //pega o valor do atributo
header.removeAttribute("id")    //remover um atributo


//Alterando estilos
const element10 = document.querySelector("body")

element10.style.backgroundColor = "#f9f5D2"     //setando a propriedade do CSS via JS
console.log(element10.style.backgroundColor)    //buscando o valor

//classList (ENTENDI mais ou menos)
const element11 = document.querySelector("body")
//element11.classList.add('active', 'green')  //para adicionar propriedade ao elemento
console.log(element11.classList)
//element11.classList.remove('active')        //para remover propriedade ao elemento
//element11.classList.toggle('active')        //pesquisa primeiramente se existir ele tira senao para adiciona a propriedade ao elemento

//Navegacao pelos elementos
//parentNode parentElement  (elementos PAI)

const body2 = document.querySelector('body')
console.log(body2.parentNode)   //navega pelo elemento PAI (TAG acima)
console.log(body2.parentElement)

//childNodes children (elementos FILHOS)

const el = document.querySelector('body')
console.log(el.childNodes)  //traz o resultado em Lista Node e considera os itens de espaço
console.log(el.children)    //traz o resultado em HTML Collection
console.log(el.firstElementChild)   //traz o primeiro elemento
console.log(el.lastElementChild)    //traz o ultimo elemento

//nextSibling nextElementSibling (elementos IRMAOS)

let el1 = document.querySelector('header')
console.log(el1.nextElementSibling) //proximo elemento irmao
el1 = document.querySelector('body script')
console.log(el1.previousElementSibling) //elemento anterior irmao

//Criando e adicionando elementos
//createElement
const div = document.createElement('div')
div.innerText = 'Olah DEVs Quarenta e Cinco'

//definindo o ponto de insercao do element
const body3 = document.querySelector('body')
body3.append(div)   //adiciona ao elemento no final
//body3.prepend(div)  //adiciona o elemento no inicio

//inserindo um elemento num ponto especifico
const div2 = document.createElement('div')
div2.innerText = 'Olah DEVs Setenta e set'
const body4 = document.querySelector('body')
const script2 = body4.querySelector('script')

body3.insertBefore(div, script2) //primeiro parametro o que vai ser inserido, segundo o ponto TAG