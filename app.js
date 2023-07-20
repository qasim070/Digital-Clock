function update() {
    let mainElement = document.getElementById("clockMain");
    let dateInstance = new Date();

    mainElement.innerHTML= "Last Sync: " + dateInstance.getDate() + "/"
    + (dateInstance.getMonth()+1)  + "/" 
    + dateInstance.getFullYear() + " @ "  
    + dateInstance.getHours() + ":"  
    + dateInstance.getMinutes() + ":" 
    + dateInstance.getSeconds();
}
