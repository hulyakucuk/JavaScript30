//  broadcast
const broadcast=new BroadcastChannel('channel_name');


function readNotifications(){
clearNotifications();
//broadcast e postmessage ile mesaj gonder
broadcast.postMessage('message_data');
}

function clearNotifications(){
    document.querySelector(".notification-count").remove();
}

function darkMode(){
    switchTheme();
broadcast.postMessage("theme:switch")
}

function switchTheme(){
    document.body.classList.toggle("dark");
}

broadcast.addEventListener("message",event=>{
    // console.log(event);

    switch(event.data){
        case "message_data":
            clearNotifications();
            return;

        case "theme:switch":
            switchTheme();
            return;
        default:
            console.log(event.data);    
    }
})

