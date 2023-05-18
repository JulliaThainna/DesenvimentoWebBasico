function save(){
    let t = document.getElementById("showAllInfos");
    let firstRow = t.getElementsByTagName("tr")[0];

    let row = t.insertRow();
    let ids = ["name", "email", "birth", "states"];
    for(let i = 0; i < firstRow.cells.length; i ++){
        let cel = row.insertCell(i);
        cel.innerHTML = document.getElementById(ids[i]).value;
    }
}