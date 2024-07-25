
const input = document.getElementById('input')
const resultInput = document.getElementById("inputRes")
const allowedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','(',')']
/*resultInput.value = "0"
input.value = '0'*/


// Adicionar valor no input - 1: referenciar o próprio evento
// 2: prevenir de repetir; 3: se as teclas apertadas do evento 
// forem iguais ou estiverem na lista do allowedkeys, entao
// 4: valor do input recebe a tecla apertada do evento keydown
input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
}  
    // apagar conteudo, o novo valor do 
    // input será o antigo valor mas cortado(slice)
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculateEnter()
    }
    function calculateEnter(){
        if (input.value === ''){
            input.value = 'ERROR'
        }
        else {
        input.focus()
        const resultEnter = eval(input.value)
        resultInput.value = resultEnter 
        input.value = resultInput.value
    }
    }
    
})

/*1ºSelecionar todos que tem a classe 'charKey; 2º'Para cada um deles
vai ser adicionado um função por clique que retorna o data-value do botão
e vai parar direto no valor(value) do input*/

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
        input.focus()
    })
}) 

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    resultInput.value = ''
    input.focus()
})

document.getElementById('apagar').addEventListener('click', function(){
    input.value = input.value.slice(0,-1)
    input.focus()
})
//dar uma olhada aqui no calculate() retornando
document.getElementById('equal').addEventListener('click', function(){
    if (input.value === ''){
        input.value = 'ERROR'
    }
    else {
    input.focus()
    const resultEnter = eval(input.value)
    resultInput.value = resultEnter 
    input.value = resultInput.value
}
})

/*const mainCss = document.getElementsByName('main')
mainCss.style.backgroundColor = 'red'*/



/*const mc = document.getElementById('ClearMode')*/

/*Dá pra fazer desses 2 modos*/
function modopreto() {
    /*const btnteste = document.getElementById('mainnormal')
    btnteste.setAttribute('id','mainnormal2')*/

    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.712)'

    document.querySelector('main').style.backgroundColor = 'rgb(26, 27, 40)';
    document.getElementById('divBtn1').style.backgroundColor = 'rgb(26, 27, 40)';
    document.querySelectorAll("#btnNum").forEach(function (btnNum) {
        btnNum.style.backgroundColor = '#4dff91'
        btnNum.style.color = 'rgba(15, 15, 15, 0.8)'
        })
    document.querySelectorAll("#btnOp").forEach(function (btnOp) {
        btnOp.style.backgroundColor = '#26834a'
        btnOp.style.color = 'black'
        })
    document.querySelector('#clear').style.backgroundColor = '#26834a'
    document.querySelector('#clear').style.color = 'white'
    document.querySelector('#apagar').style.backgroundColor = '#26834a'
    document.querySelector('#apagar').style.color = 'white'
    document.querySelector('#equal').style.backgroundColor = '#26834a'
    document.querySelector('#equal').style.color = 'white'

    let changeEq = document.querySelector('#equal')
    changeEq.addEventListener('mouseenter',function mudcor(){
    changeEq.style.backgroundColor = 'rgba(44, 51, 78, 0.948)'})
    
    changeEq.addEventListener('mouseout',function mudcor2(){
    changeEq.style.backgroundColor = '#26834a'})

    let changeAp = document.querySelector('#apagar')
    changeAp.addEventListener('mouseenter',function mudcor(){
    changeAp.style.backgroundColor = 'rgba(44, 51, 78, 0.948)'})
        
    changeAp.addEventListener('mouseout',function mudcor2(){
    changeAp.style.backgroundColor = '#26834a'})

    let changeCl = document.querySelector('#clear')
    changeCl.addEventListener('mouseenter',function mudcor(){
    changeCl.style.backgroundColor = 'rgba(44, 51, 78, 0.948)'})
        
    changeCl.addEventListener('mouseout',function mudcor2(){
    changeCl.style.backgroundColor = '#26834a'})
}




function modoclaro(){
document.getElementById('ClearMode').addEventListener('click', function LightMode(){
    document.body.style.backgroundColor = 'gray'

    document.querySelector('main').style.backgroundColor = 'rgb(225, 225, 225)';
    document.getElementById('divBtn1').style.backgroundColor = 'rgb(225, 225, 225)';
    document.querySelectorAll("#btnNum").forEach(function (btnNum) {
        /*btnNum.id = 'teste'*/
        btnNum.style.backgroundColor = 'rgb(40, 49, 71)'
        btnNum.style.color = 'white'
        })
    document.querySelectorAll("#btnOp").forEach(function (btnOp) {
        btnOp.style.backgroundColor = 'rgb(48, 154, 170)'
        btnOp.style.color = 'black'
        })
    document.querySelector('#clear').style.backgroundColor = 'rgb(48, 154, 170)'
    document.querySelector('#clear').style.color = 'rgb(214, 20, 20)'
    document.querySelector('#apagar').style.backgroundColor = 'rgb(48, 154, 170)'
    document.querySelector('#apagar').style.color = 'rgb(214, 20, 20)'
    document.querySelector('#equal').style.backgroundColor = 'rgb(48, 154, 170)'
    document.querySelector('#equal').style.color = 'white'



    let corChange = document.querySelector('#equal')
    corChange.addEventListener('mouseenter', function mudcor(){
        corChange.style.backgroundColor = 'rgba(44, 51, 78, 0.948)'})

    corChange.addEventListener('mouseout', function mudcor2(){
        corChange.style.backgroundColor = 'rgb(48, 154, 170)'})


    let changeEq = document.querySelector('#equal')
        changeEq.addEventListener('mouseenter',function mudcor(){
        changeEq.style.backgroundColor = 'rgba(48, 120, 94)'})
        
        changeEq.addEventListener('mouseout',function mudcor2(){
        changeEq.style.backgroundColor = 'rgb(48, 154, 170)'})
    
    let changeAp = document.querySelector('#apagar')
        changeAp.addEventListener('mouseenter',function mudcor(){
        changeAp.style.backgroundColor = 'rgba(48, 120, 94)'})
            
        changeAp.addEventListener('mouseout',function mudcor2(){
        changeAp.style.backgroundColor = 'rgb(48, 154, 170)'})
    
    let changeCl = document.querySelector('#clear')
        changeCl.addEventListener('mouseenter',function mudcor(){
        changeCl.style.backgroundColor = 'rgba(48, 120, 94)'})
            
        changeCl.addEventListener('mouseout',function mudcor2(){
        changeCl.style.backgroundColor = 'rgb(48, 154, 170)'})
    })
}
