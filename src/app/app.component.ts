import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  currentYear = new Date().getFullYear();

  projetos = [
    {
      nome : 'browser extensions',
      descricao : 'Página que gerencia as extensões do navegador, permitindo administrá-las',
      link : 'https://portfolio-react-rust-six.vercel.app/',
      image :'../assets/browser-extension.png' 
    },

    {
      nome: '3-column-preview-card-component-main',
      descricao: 'Card de pré-visualização com 3 colunas.',
      link: 'https://domenique-rosa-github-io-jimv.vercel.app/',
      imagem:
        '../assets/domenique-rosa-github-io-jimv-vercel-app-1024x768desktop-50c2f7.jpg',
    },
    {
      nome: 'article-preview-component-master',
      descricao: 'Componente para pré-visualização de artigos.',
      link: 'https://domeniquerosa.github.io/article-preview-component-master/',
      imagem: '../assets/domeniquerosa-github-io-1024x768desktop-bc3029.jpg',
    },
    {
      nome: 'blog-preview-card-main',
      descricao: 'Cartão para pré-visualização de blogs.',
      link: 'https://domeniquerosa.github.io/blog-preview-card-main/',
      imagem: '../assets/card.jpg',
    },

    {
      nome: 'faq-accordion-main',
      descricao: 'Componente FAQ.',
      link: 'https://domenique-rosa-github-io.vercel.app/',
      imagem: '../assets/faq.jpg',
    },
    {
      nome: 'four-card-feature-section-master',
      descricao: 'Seção com quatro cards de funcionalidades.',
      link: 'https://domeniquerosa.github.io/four-card-feature-section-master/',
      imagem: '../assets/4-card.jpg',
    },

    {
      nome: 'qr-code-component-main',
      descricao: 'Componente para QR Code simples.',
      link: 'https://domeniquerosa.github.io/qr-code-component-main/',
      imagem: '../assets/qr.jpg',
    },
    {
      nome: 'product-preview-card-component-main',
      descricao: 'Cartão para pré-visualização de produto.',
      link: 'https://domeniquerosa.github.io/product-preview-card-component-main/',
      imagem: '../assets/product.jpg',
    },

    {
      nome: 'nft-preview-card-component-main',
      descricao: 'Cartão de pré-visualização NFT.',
      link: 'https://domeniquerosa.github.io/nft-preview-card-component-main/',
      imagem: '../assets/ntf.jpg',
    },
  ];
}
