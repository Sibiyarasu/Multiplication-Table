function generateTable() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    const tableContainer = document.getElementById("tableContainer");

    if (isNaN(inputNumber)) {
        tableContainer.innerHTML = "Please enter a valid number.";
        return;
    }

    let tableHTML = "<table><tr><th></th>";
    let sum = 0;

    
    for (let q = 1; q < 2; q++)
     {
        for (let i = 1; i <= inputNumber; i++) {
            tableHTML += `<th>${i}</th>`;
            
    
        }
     
        tableHTML += `<th>Sum</th>`;
        tableHTML += `<th>Average</th>`;
    
    }
      
    
    tableHTML += "</tr>";

    for (let i = 1; i <= inputNumber; i++) 
    {
        tableHTML += `<tr><th>${i}</th>`;
        let rowSum = 0;
        
        for (let j = 1; j <= inputNumber; j++) 
        {
            const result = i * j;
            rowSum += result;
            tableHTML += `<td>${result}</td>`;
            
        }
           tableHTML += `<td "${inputNumber}">${ rowSum }</td>`;
            const average =  rowSum  / inputNumber;
            tableHTML += `<td "${inputNumber}">${average}</td>`;
            sum += rowSum;
        
    }
    
    const taverage = sum / inputNumber;

    // tableHTML += `<th>Sum</th><td colspan="${inputNumber}">${sum}</td>`;
    // tableHTML += `<th>Average</th><td colspan="${inputNumber}">${taverage}</td>`;

    

    tableContainer.innerHTML = tableHTML;


    tableHTML += `</tr>`;
    tableHTML += "</table>";
}


function Result() 

{

    location.replace(generateTable())

}

