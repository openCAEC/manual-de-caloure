import Head from "next/head";

import Layout from "../components/Layout";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Manual de caloure CAEC</title>
      </Head>

      <Layout>
        <h1>Sobre este Manual</h1>
        <p>
          Produzido pelo CAEC - Centro Acadêmico de Engenharia de Computação da
          Universidade Federal de Santa Cartarina
        </p>

        <p>
          Este trabalho é baseado no Manual de Ingressante do CACO - Centro
          Acadêmico de Computação da UNICAMP.
        </p>

        <h2>Licenças</h2>
        <p>
          O conteúdo deste manual está licenciado sob a Licença
          Attribution-ShareAlike 3.0 Brasil da Creative Commons. Para ver uma
          cópia desta licença, visite creativecommons.org/licenses/by-sa/3.0/br.
        </p>
        <p>
          Já o código deste manual está licenciado sob a Licença MIT, disponível
          em
          https://github.com/openCAEC/manual-de-ingressante/blob/main/teste/LICENSE.
        </p>
      </Layout>
    </>
  );
}
