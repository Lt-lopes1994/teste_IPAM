<h1 align="center">Buscador de Estados e cidades</h1>

<p align="justify"> Projeto realizado com o intuito de demonstrar a proeficiência com a linguagem JS, a biblioteca React e a biblioteca de aramzenamento de estados Redux. Neste projeto utilizei a API do IBGE para puxar dados como UF, Cidades e informações da cidades para mostrar na tela e fazer uso dos estados passando os mesmo via Redux. </p>

<img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>

<img src="https://img.shields.io/static/v1?label=redux&message=framework&color=purple&style=for-the-badge&logo=REDUX"/>

<img src="https://img.shields.io/static/v1?label=javascript&message=linguagem&color=yellow&style=for-the-badge&logo=JAVASCRIPT"/>

<img src="https://img.shields.io/static/v1?label=html&message=linguagem&color=red&style=for-the-badge&logo=HTML5"/>

<img src="https://img.shields.io/static/v1?label=css&message=linguagem&color=blue&style=for-the-badge&logo=CSS3"/>

<img src="https://img.shields.io/static/v1?label=ibge&message=api&color=green&style=for-the-badge&logo=IBGE"/>

<img src="https://img.shields.io/static/v1?label=github&message=plataforma&color=black&style=for-the-badge&logo=GITHUB"/>

<img src="https://img.shields.io/static/v1?label=vscode&message=editor&color=blue&style=for-the-badge&logo=VISUALSTUDIO"/>

### Listas não ordenadas

- Busca de estados pela API do IBGE
    -Usando a seguinte URL <https://servicodados.ibge.gov.br/api/v1/localidades/estados> para buscar os estados
- Busca de cidades pela API do IBGE
    -Usando a seguinte URL <https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios> para buscar as cidades de acordo com a UF passada na busca de estados e salva no estado Redux.
- Busca de informações da cidade pela API do IBGE
    -Usando a seguinte URL <https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{ID}/distritos> para buscar as informações da cidade de acordo com o ID passado na busca de cidades e salva no estado Redux.

> Status do Projeto: Em desenvolvimento :heavy_check_mark:

## Deploy da Aplicação com Vercel: 🛠️

><https://teste-ipam.vercel.app>

## Como rodar a aplicação: :arrow_forward

No terminal, clone o projeto:

```bash
git clone https://github.com/Lt-lopes1994/teste_IPAM.git
```

entre na pasta do projeto:

````bash
cd teste_IPAM
`````

instale as dependências:

````bash
npm install
`````

inicie a aplicação:

````bash
npm start
`````

## Linguagens, dependencias e libs utilizadas :books

React, Redux, Javascript, HTML, CSS, IBGE API, Github, VSCode, Vercel.

[<img src="https://avatars.githubusercontent.com/u/83840795?v=4" width=115 > <br> <sub> Bruno Lopes 🌐 </sub>](https://github.com/Lt-lopes1994)
