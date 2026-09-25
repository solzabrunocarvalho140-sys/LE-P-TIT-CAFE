document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU MOBILE HAMBURGER
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em qualquer link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. FILTROS / TABS DO CARDÁPIO
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe ativa de todos os botões e painéis
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Adiciona classe ativa ao botão clicado
            btn.classList.add('active');

            // Exibe o painel correspondente
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 3. ANIMAÇÃO SUAVE AO ROLAR (INTERSECTION OBSERVER)
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(el => observer.observe(el));

    // 4. BOTÃO VOLTAR AO TOPO
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});