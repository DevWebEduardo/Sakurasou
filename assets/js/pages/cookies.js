let main = document.getElementById('main');

    cookie();

function cookie() {
    var lang = localStorage.getItem('lang');
    if (lang === 'EN') {
        var content = `
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-4">Cookie Policy</h2>
            <p>
            This website uses cookies to enhance your browsing experience and provide personalized content and ads. By continuing to browse this site, you consent to the use of cookies.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">What Are Cookies?</h3>
            <p>
            Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide useful information to website owners.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Types of Cookies We Use</h3>
            <ol class="list-decimal pl-6">
            <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic features such as page navigation, security, and access to certain areas of the website. These cookies do not gather any personal information.
            </li>
            <li>
                <strong>Analytical/Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as the number of visitors, the pages visited, and the links clicked. This information helps us improve our website's performance and understand user preferences. These cookies do not identify you personally.
            </li>
            <li>
                <strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced features. They may also be used to provide services you have requested, such as commenting on a blog post. The information collected by these cookies may be anonymized and they cannot track your browsing activity on other websites.
            </li>
            <li>
                <strong>Advertising/Targeting Cookies:</strong> These cookies are used to deliver relevant advertisements and marketing campaigns based on your interests and browsing behavior. They are also used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns. These cookies may be set by us or by third-party advertising networks.
            </li>
            <li>
                <strong>Tracking Cookies:</strong> We use tracking cookies to monitor website traffic and understand how visitors interact with our website. This information helps us analyze trends, track user behavior, and improve the overall user experience. These cookies may be set by us or by third-party analytics providers.
            </li>
            </ol>
            <h3 class="text-lg font-semibold mt-6 mb-2">Managing Cookies</h3>
            <p>
            You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies, or to alert you when a cookie is being sent. However, please note that blocking or deleting cookies may affect your browsing experience and limit the functionality of certain websites.
            </p>
            <p class="mt-4">
            For more information on how to manage cookies, you can refer to the "Help" section of your browser or visit <a href="https://www.allaboutcookies.org" class="underline text-purple-600">www.allaboutcookies.org</a>.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Third-Party Cookies</h3>
            <p>
            This website may use third-party services that place cookies on your device. These services include analytics tools, social media platforms, and advertising networks. We do not have control over the cookies set by these services. For more information about their cookie practices, please visit their respective websites.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Updates to This Cookie Policy</h3>
            <p>
            We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any updates will be posted on this page, and the effective date will be indicated at the top of the policy.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
            <p>
            If you have any questions or concerns about our use of cookies, please contact us.
            </p>
        </div>
        `;
        main.innerHTML = content;
    } else {
        var content = `
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-4">Política de Cookies</h2>
            <p>
                Este site utiliza cookies para melhorar sua experiência de navegação e fornecer conteúdo personalizado e anúncios. Ao continuar a navegar neste site, você concorda com o uso de cookies.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">O que são Cookies?</h3>
            <p>
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente, melhorar a experiência do usuário e fornecer informações úteis aos proprietários do site.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Tipos de Cookies que Utilizamos</h3>
            <ol class="list-decimal pl-6">
                <li>
                    <strong>Cookies Essenciais:</strong> Esses cookies são necessários para o funcionamento adequado do site. Eles permitem recursos básicos, como navegação nas páginas, segurança e acesso a determinadas áreas do site. Esses cookies não coletam informações pessoais.
                </li>
                <li>
                    <strong>Cookies Analíticos/Desempenho:</strong> Esses cookies coletam informações sobre como os visitantes usam nosso site, como o número de visitantes, as páginas visitadas e os links clicados. Essas informações nos ajudam a melhorar o desempenho do nosso site e entender as preferências dos usuários. Esses cookies não identificam você pessoalmente.
                </li>
                <li>
                    <strong>Cookies de Funcionalidade:</strong> Esses cookies permitem que o site lembre as escolhas que você faz (como seu nome de usuário, idioma ou região) e forneçam recursos aprimorados. Eles também podem ser usados para fornecer serviços solicitados por você, como comentar em uma postagem de blog. As informações coletadas por esses cookies podem ser anonimizadas e eles não podem rastrear sua atividade de navegação em outros sites.
                </li>
                <li>
                    <strong>Cookies de Publicidade/Segmentação:</strong> Esses cookies são usados para fornecer anúncios relevantes e campanhas de marketing com base em seus interesses e comportamento de navegação. Eles também são usados para limitar o número de vezes que você vê um anúncio e medir a eficácia das campanhas publicitárias. Esses cookies podem ser definidos por nós ou por redes de publicidade de terceiros.
                </li>
                <li>
                    <strong>Cookies de Rastreamento:</strong> Utilizamos cookies de rastreamento para monitorar o tráfego do site e entender como os visitantes interagem com nosso site. Essas informações nos ajudam a analisar tendências, acompanhar o comportamento do usuário e melhorar a experiência geral do usuário. Esses cookies podem ser definidos por nós ou por provedores de análises de terceiros.
                </li>
            </ol>
            <h3 class="text-lg font-semibold mt-6 mb-2">Gerenciamento de Cookies</h3>
            <p>
                Você pode controlar e gerenciar cookies nas configurações do seu navegador. A maioria dos navegadores permite bloquear ou excluir cookies, ou alertá-lo quando um cookie está sendo enviado. No entanto, observe que bloquear ou excluir cookies pode afetar sua experiência de navegação e limitar a funcionalidade de determinados sites.
            </p>
            <p class="mt-4">
                Para obter mais informações sobre como gerenciar cookies, consulte a seção "Ajuda" do seu navegador ou visite <a href="https://www.allaboutcookies.org" class="underline text-purple-600">www.allaboutcookies.org</a>.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Cookies de Terceiros</h3>
            <p>
                Este site pode utilizar serviços de terceiros que colocam cookies em seu dispositivo. Esses serviços incluem ferramentas de análise, plataformas de mídia social e redes de publicidade. Não temos controle sobre os cookies definidos por esses serviços. Para obter mais informações sobre as práticas de cookies deles, visite os respectivos sites.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Atualizações desta Política de Cookies</h3>
            <p>
                Podemos atualizar esta Política de Cookies de tempos em tempos para refletir mudanças na tecnologia ou requisitos legais. Qualquer atualização será publicada nesta página, e a data efetiva será indicada no topo da política.
            </p>
            <h3 class="text-lg font-semibold mt-6 mb-2">Entre em Contato</h3>
            <p>
                Se você tiver alguma dúvida ou preocupação sobre o uso de cookies, entre em contato conosco.
            </p>
        </div>    
        `;
        main.innerHTML = content;
    }
}
