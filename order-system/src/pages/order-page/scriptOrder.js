export function order(){
    const form = document.getElementById("form");

    const validation = async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const cellphone = document.getElementById("cellphone").value;

        const data = new FormData();
        data.append("name", name);
        data.append("cellphone", cellphone);
        data.append("_captcha", "false");

        try{
            const response = await fetch("https://formsubmit.co/pc.cordeirolima@gmail.com", {
                method: "POST",
                body: data
            });
            
            if(response.ok){
                console.log("Info has been sent");
                document.getElementById("form").reset();
            }
        }
        catch(err){
            console.log("Error send info: ", err);
        }
    };

    form.addEventListener("submit", validation);
}