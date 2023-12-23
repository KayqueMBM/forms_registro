document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");

    function fetchMissingPersons() {
        // Simulação de dados obtidos do servidor PHP (pode ser substituído por uma solicitação AJAX real)
        const missingPersonsData = [
            { id: 1, name: "João Silva", description: "Desaparecido em 15/02/2023", contact: "João's family" },
            { id: 2, name: "Maria Oliveira", description: "Desaparecida em 20/03/2023", contact: "Maria's friend" },
            { id: 3, name: "Carlos Santos", description: "Desaparecido em 10/04/2023", contact: "Carlos's relative" }
            // Adicione mais dados conforme necessário
        ];

        list.innerHTML = "";

        missingPersonsData.forEach(person => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${person.name}</strong><br>${person.description}<br>Contact: ${person.contact}
                <div class="action-buttons">
                    <button onclick="editPerson(${person.id})">Editar</button>
                    <button onclick="deletePerson(${person.id})">Excluir</button>
                </div>`;
            list.appendChild(listItem);
        });
    }

    fetchMissingPersons();

    window.editPerson = function (id) {
        // Lógica para editar a pessoa (pode incluir um formulário de edição)
        alert(`Editar pessoa com ID ${id}`);
    };

    window.deletePerson = function (id) {
        // Lógica para excluir a pessoa (pode incluir uma confirmação)
        const confirmed = confirm("Tem certeza que deseja excluir esta pessoa?");
        if (confirmed) {
            // Simulação de exclusão (pode ser substituído por uma solicitação AJAX real)
            alert(`Excluir pessoa com ID ${id}`);
            // Atualizar a lista após a exclusão
            fetchMissingPersons();
        }
    };

    window.goToRegisterPage = function () {
        // Redirecionar para a página de registro de nova pessoa desaparecida
        window.location.href = "index.html";
    };
});