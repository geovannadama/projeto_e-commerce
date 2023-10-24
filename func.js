function consultaCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado");
            } else {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            }
        })
        .catch(error => {
            console.error("Erro ao consultar o CEP: " + error);
        });
}
