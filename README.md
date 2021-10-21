## Space News

O site <b>Space News</b> é um site sobre o espaço que é atualizado todo o dia com novas notícias vindas diretamente da NASA, o foco do site é em ui/ux.


## Importante

<p>O site é feito na versão ^10.2.3 do Next.js, pois a versão 11.1.2 apresenta erros na importação de imagens com o next-images ou webpack.</p>

## Requisitos... :computer:

-Node js e um editor de código ou IDE para executar o projeto e modificá-lo


## Começando ☕

Primeiramente baixe o projeto e execute-o usando:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver os resultados.

Você pode começar a modificar o projeto por onde quiser, um bom começo é modificar o: `pages/index.js`


## Por dentro do projeto :open_file_folder:

Vamos conhecer um pouco sobre a organização de pastas do projeto e seus arquivos...


## Pasta "assets"

É a pasta responsável pelos arquivos estáticos, dentro dessa pasta a pasta "images" que contém todas as imagens do site.

## Pasta "pages"

Como o próprio nome sugere, essa pasta é a responsável por agrupar todas as páginas do site.


## Pasta "components"

A pasta responsável pelos componentes do site, cada componente possui sua pasta com o arquivo .js e o "style.js" responsável pelo estilo do componente.


## Pasta "patterns"

Dentro dessa pasta fica arquivos reutilizáveis, esses arquivos são elementos HTML com um estilo já pré definido e outras coisas são adaptáveis através do uso de props. Para entender melhor como esses arquivos funcionam basta dar uma olhada em como cada um deles foi programado.

## pasta "styles"

Pasta responsável por conter o css global do site.

## Pasta "public"

contém o favicon do site.