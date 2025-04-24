// Validação de Formulário (Já incluído no HTML)
// Bônus: Integração com API (exemplo usando Fetch)
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const response = await fetch('SUA_URL_API_AQUI', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
    }
});