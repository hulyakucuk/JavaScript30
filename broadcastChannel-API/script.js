
const broadcast=new BroadcastChannel('channel_name');


function readNotifications(){
clearNotifications();
broadcast.postMessage('message_data');
}

function clearNotifications(){
    document.querySelector(".notification-count").remove();
}


broadcast.addEventListener("message",event=>{
    // console.log(event);

    switch(event.data){
        case "message_dataa":
            clearNotifications();
            return;
        default:
            console.log(event.data);    
    }
})

