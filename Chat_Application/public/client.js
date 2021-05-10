const socket=io();// for real Time Application  
let name1;
let textarea=document.querySelector('#textarea');
let message__area=document.querySelector('.message__area');
do{
    name1=prompt('Enter a Name')
}while(!name1);
textarea.addEventListener('keyup',(e)=>{
    if(e.key==='Enter')
    {
        sendMessage(e.target.value)
    }
})
function sendMessage(message)
{
    let msg={
        user:name1,
        message:message.trim(),
    }
    //Append
    appendMessage(msg,'outgoing')
    textarea.value=''
    scrollToBottom()
    
    //send Data to Server by socket.io
    socket.emit('message lele tau',msg)
}
function appendMessage(msg,type)
{
    let mainDiv=document.createElement('div');
    let className=type;
    mainDiv.classList.add(className,'message');
    

    let markup=`
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>

    `
    mainDiv.innerHTML=markup;
    message__area.appendChild(mainDiv)

}
//Receive Message
socket.on('message bhej',(msg)=>{
    appendMessage(msg,'incoming')
    scrollToBottom();
})
//scrolling Feature
function scrollToBottom()
{
    message__area.scrollTop=message__area.scrollHeight
}