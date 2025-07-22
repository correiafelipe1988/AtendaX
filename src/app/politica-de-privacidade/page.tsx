import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Informações que coletamos
              </h2>
              <p className="text-gray-700 mb-4">
                A AtendaX coleta as seguintes informações quando você utiliza nossa plataforma:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Informações de identificação pessoal (nome, e-mail, telefone)</li>
                <li>Dados de uso da plataforma e interações com o sistema</li>
                <li>Informações técnicas como endereço IP e dados do dispositivo</li>
                <li>Cookies e tecnologias similares para melhorar sua experiência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Como utilizamos suas informações
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fornecer e melhorar nossos serviços de atendimento ao cliente</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Comunicar atualizações importantes sobre o serviço</li>
                <li>Oferecer suporte técnico quando necessário</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Compartilhamento de dados
              </h2>
              <p className="text-gray-700 mb-4">
                A AtendaX não vende, aluga ou compartilha suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais ou ordens judiciais</li>
                <li>Com prestadores de serviços que nos auxiliam na operação da plataforma</li>
                <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Segurança dos dados
              </h2>
              <p className="text-gray-700">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição. Isso inclui criptografia de dados, controles de acesso 
                e monitoramento contínuo de nossa infraestrutura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Seus direitos
              </h2>
              <p className="text-gray-700 mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de dados desnecessários ou excessivos</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Retenção de dados
              </h2>
              <p className="text-gray-700">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
                as finalidades descritas nesta política, respeitando prazos legais aplicáveis. 
                Quando não mais necessários, os dados são excluídos de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-700">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar 
                suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Alterações nesta política
              </h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Privacidade periodicamente. Quando isso 
                acontecer, notificaremos você através da plataforma ou por e-mail. 
                Recomendamos que revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contato
              </h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer 
                seus direitos, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> privacidade@atendax.com<br/>
                  <strong>Telefone:</strong> (11) 99999-9999<br/>
                  <strong>Endereço:</strong> São Paulo, SP - Brasil
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}