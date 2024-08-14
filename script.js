function calculateResults() {
    let matricula = document.getElementById('matricula').value;
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    let total = nota1 + nota2 + nota3 + nota4;
    let media = total / 4;
    let situacao = media >= 7 ? "Aprovado" : "Recuperação Final";
    let recuperacao = "-";

    if (situacao === "Recuperação Final") {
        recuperacao = parseFloat(prompt("Digite a nota da Recuperação Final:"));
        if (recuperacao >= 5) {
            situacao = "Aprovado";
        } else {
            situacao = "Reprovado";
        }
    }

    let table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${matricula}</td>
        <td>${nome}</td>
        <td>${nota1.toFixed(1)}</td>
        <td>${nota2.toFixed(1)}</td>
        <td>${nota3.toFixed(1)}</td>
        <td>${nota4.toFixed(1)}</td>
        <td>${total.toFixed(1)}</td>
        <td>${media.toFixed(1)}</td>
        <td>${recuperacao !== "-" ? recuperacao.toFixed(1) : recuperacao}</td>
        <td>${situacao}</td>
    `;
}
