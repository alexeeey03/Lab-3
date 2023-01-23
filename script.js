var lines=0;




function create(){
        var table = document.createElement('table');
        lines++;
        table.setAttribute('id','table')
        document.body.append(table);   
        if (lines==1){
            document.getElementById("delete").removeAttribute("disabled");
            document.getElementById("number").removeAttribute("disabled");
        }
        var tab = table.insertRow();
        tab.insertCell().append(lines);
        tab.insertCell().append("индекс");
        document.getElementById("add").removeAttribute("disabled");
        alert("Таблица была создана.");
        document.getElementById("create").disabled = true;
    
}



function add(){ 
    lines++;
    if (lines==1){
        document.getElementById("delete").removeAttribute("disabled");
        document.getElementById("number").removeAttribute("disabled");
    }
    var tab = table.insertRow();
    tab.insertCell().append(lines);
    tab.insertCell().append("индекс");    
}


function deletee(){
    var index = document.getElementById('number').value;
    if (index==""){
        alert("Нужно ввести число");
        return;
    }
    var table = document.querySelector('table');
    var delindex = 0;
    var len = table.rows.length
    for (var i = 0; i <len; i++){
        var indextable = document.querySelector('table').rows[i].cells[0].innerHTML;
        delindex++;
        if (indextable==index){
            let index_for_deleting = delindex - 1;
            table.deleteRow(index_for_deleting);
            delindex = 0;
            return;
        } 
    }
    alert("Введенного индекса не существует");
}