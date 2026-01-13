function ligarCircuito() {

    const nomeCorreto = "Miranha"; // ajuste aqui
    const nome = document.getElementById("nome").value.trim();
    const lampada = document.getElementById("lampada");
    const mensagem = document.getElementById("mensagem");
    const coracao = document.getElementById("coracao");
    const som = document.getElementById("somLigado");

    lampada.classList.remove("ligada");
    coracao.classList.remove("pulsar");

    if (nome === "") {
        mensagem.innerHTML = "⚠️ Digite para conseguir...";
        return;
    }

    // 👉 SEU BLOCO ENTRA AQUI
    if (nome.toLowerCase() === nomeCorreto.toLowerCase()) {
        lampada.classList.add("ligada");
        coracao.classList.add("pulsar");
        som.play();

        mensagem.innerHTML = `
            ❤️ ${nome}, Isso ai amor.<br>
           Vamos continuar...  ⚡
        `;

        const transicao = document.getElementById("transicao");
        transicao.classList.add("ativa");

        setTimeout(() => {
            window.location.href = "amor.html";
        }, 3000);
    } else {
        mensagem.innerHTML = "❌ Errado,tente de novo";
    }
}
