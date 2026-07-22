// Data do evento
const dataEvento = new Date("September 20, 2026 21:00:00").getTime();
// Atualiza o contador a cada segundo
const contador = setInterval(() => {
    // Data e hora atuais
    const agora = new Date().getTime();
    // Diferença entre o evento e o momento atual
    const diferenca = dataEvento - agora;
    // Cálculos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );
    // Atualiza os valores no HTML
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    // Quando o evento começar
    if (diferenca <= 0) {
        clearInterval(contador);
        document.getElementById("contador").innerHTML = `
            <h2>🎉 O evento começou!</h2>
        `;
    }
}, 1000);