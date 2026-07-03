async function askAI() {

    const message = document.getElementById("message").value;

    if(message.trim()===""){

        alert("Please enter a question");

        return;

    }

    const responseBox=document.getElementById("response");

    responseBox.innerHTML="<div class='loading'>🤖 Thinking...</div>";

    try{

        const response=await fetch("/api/chat",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                message:message

            })

        });

        const data=await response.json();

        responseBox.innerHTML=data.response;

    }

    catch(e){

        responseBox.innerHTML="<div class='error'>❌ Something went wrong.</div>";

    }

}