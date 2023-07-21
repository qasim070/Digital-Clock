function update() {
    let mainElement = document.getElementById("clockMain");
    let dateInstance = new Date();
    let format  ;

    if(dateInstance.getHours() > 12){
        format = "AM"
    }else{
        format = "PM";
    }


    mainElement.innerHTML= "Last Sync: " + dateInstance.getDate() + "/"
    + (dateInstance.getMonth()+1)  + "/" 
    + dateInstance.getFullYear() + " <br> "  + 
    + dateInstance.getHours() + ":"  
    + dateInstance.getMinutes() + ":" 
    + dateInstance.getSeconds() + " " +format;
}
