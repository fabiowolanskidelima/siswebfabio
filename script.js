
        // Lógica de Navegação
        function handleNav(event, sectionId) {
            if (event) event.preventDefault();
            
            // Esconde todas as seções
            document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
            
            // Mostra a seção alvo
            const target = document.getElementById(sectionId);
            if (target) target.classList.add('active');
            
            // Atualiza o estado ativo no menu
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === sectionId) link.classList.add('active');
            });
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Lógica de Troca de Tema
        function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById('theme-icon');
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                icon.innerText = '◎';
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                icon.innerText = '●';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Lógica do Formulário
        function handleForm(event) {
            event.preventDefault();
            const btn = event.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Enviado com Honra";
            btn.style.backgroundColor = "#1a1a1a";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                event.target.reset();
            }, 2000);
        }

        // Inicialização
        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const icon = document.getElementById('theme-icon');
            if (savedTheme === 'dark') {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                icon.innerText = '●';
            } else {
                document.body.classList.add('light-theme');
                icon.innerText = '◎';
            }
        });
    