const xmpp = require("simple-xmpp");

xmpp.on ("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send () {
    setTimeout(send, 5000);
    xmpp.send("sagar@ip-172-31-47-29.ap-south-1.compute.internal", `hi! ${Date.now()}`)
}
xmpp.on("error", error => 
    console.log(`something went wrong!${error} `))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "admin3@ip-172-31-47-29.ap-south-1.compute.internal",
    "password": "password",
    "host": "ip-172-31-47-29.ap-south-1.compute.internal",
    "port": 5222
})
