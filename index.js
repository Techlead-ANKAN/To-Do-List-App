function addTask() {

    const cont = document.getElementsByClassName("list-container")[0];

    const task_ip = document.getElementsByClassName("task-ip")[0]; 

    if (task_ip.value != ""){
        let tsk_cont = document.createElement("div");
        tsk_cont.classList.add("task-container");
        tsk_cont.addEventListener("click", completed);
        
        let sl = document.createElement("div");
        sl.classList.add("slno");
        var img1 = document.createElement("img"); 
        img1.height = 20;
        img1.width = 20;
        img1.src = "\\images\\radio.png";
        sl.appendChild(img1);


        let tsk = document.createElement("div");
        tsk.classList.add("task_name");
        let tsk_txt = document.createTextNode(task_ip.value);
        tsk.appendChild(tsk_txt);
        tsk.style.fontSize = "20px";
        tsk.style.fontWeight = 500;

        let cut = document.createElement("button");
        cut.style.backgroundColor = "transparent"; 
        cut.style.border = "none"; 
        cut.style.paddingTop = "2.5px";
        cut.classList.add("cut");
        // let cut_txt = document.createTextNode("CUT");
        var img = document.createElement("img"); 
        img.height = 20;
        img.width = 20;
        img.src = "\\images\\delete_16190137.png"; 
        cut.appendChild(img);
        cut.addEventListener("click", deleteTask);

        tsk_cont.appendChild(sl);
        tsk_cont.appendChild(tsk);
        tsk_cont.appendChild(cut);

        cont.appendChild(tsk_cont);

    }
    else{
        alert("Please enter a task!!!");
    }

    task_ip.value = "";


}

function deleteTask(event) {
    const cont = document.getElementsByClassName("list-container")[0];
    cont.removeChild(event.target.parentNode.parentNode);

}


function completed(event){
    const img = event.target.children[0].children[0];
    if (img.src.includes("radio.png")) {
        img.src = "\\images\\checked.png";
    } else {
        img.src = "\\images\\radio.png";
    }

}




