function save(){
    let t = document.getElementById("table-infos");
    let firstRow = t.getElementsByTagName("tr")[0];

    let row = t.insertRow();
    let ids = ["name", "email", "birth", "state"];
    for(let i = 0; i < firstRow.cells.length; i ++){
        let cel = row.insertCell(i);
        cel.innerHTML = document.getElementById(ids[i]).value;
    }
}