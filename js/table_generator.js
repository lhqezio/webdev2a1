"use strict";
import * as utilities from "../js/utilities.js";
function generateTable(){
    let table_html_render = document.querySelector("#table-html-space");
    let table_render = document.querySelector("#table-render-space");
    let table_node = document.createElement('table')
    let col_num = Number(document.getElementById('ccount').value);
    let row_num = Number(document.getElementById('rcount').value);
    let table_html = document.createElement('textarea');
    table_html.innerHTML = "<table>"
    //Go through the number of row and col to create the quantity of td in tr desired while making a string for the textare field
    for (let i = 0;i<col_num;i++){
        let  tr_node = document.createElement('tr');
        table_html.innerHTML += "\n\t<tr>";
        for (let z = 0;z<row_num;z++){
            let td_node = document.createElement('td');
            td_node.innerText='CELL'+''+i+''+z;
            table_html.innerHTML += "\n\t\t<td>\n\t\t\tCELL"+''+i+""+z+"\n\t\t</td>";
            tr_node.appendChild(td_node);
        }
        table_html.innerHTML += "\n\t</tr>";
        table_node.appendChild(tr_node);
    }
    table_html.innerHTML += "\n</table>"
    //Make the textarea read only in order to prevent input eventListener from being executed from changing it
    table_html.setAttribute('readonly', '');
    table_render.replaceChildren(table_node);
    table_html_render.replaceChildren(table_html);
    //Run input changes in order to change css properties
    inputChanges();
}
function inputChanges(){
    let text_color = document.getElementById("tcolor").value;
    let bg_color = document.getElementById("bgcolor").value;
    let bcolor = document.getElementById("bcolor").value;
    let twidth = document.getElementById("twidth").value;
    let bwidth = document.getElementById("bwidth").value;
    //Change CSS props for table and all its children
    let elem = document.querySelectorAll("table,td,tr");
    let table = document.querySelector("table");
    //Tag width is only for table
    utilities.changeTagWidth(table,twidth);
    for (let i = 0; i < elem.length; i++) {
        utilities.changeBackground(elem[i],bg_color);
        utilities.changeTextColor(elem[i],text_color);
        utilities.changeBorderColor(elem[i],bcolor);
        utilities.changeBorderWidth(elem[i],bwidth);
    }
}

window.addEventListener('DOMContentLoaded',generateTable);
addEventListener("input", generateTable);
