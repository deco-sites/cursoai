/**
 * Tipos básicos para estruturas de dados do CMS
 * Estes tipos simulam estruturas comuns em sistemas CMS headless
 */

/**
 * Representa metadados de SEO para uma página
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

/**
 * Representa um ativo de imagem no CMS
 */
export interface ImageAsset {
  url: string;
  width?: number;
  height?: number;
  title?: string;
  description?: string;
  alt?: string;
}

/**
 * Representa um bloco de texto rico no CMS
 * Simplificado para este exemplo
 */
export interface RichText {
  type: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'list' | 'listItem' | 'blockquote' | 'code';
  text?: string;
  children?: RichText[];
  listType?: 'ordered' | 'unordered';
  url?: string; // para links
  asset?: { // para imagens ou outros ativos incorporados
    id: string;
    type: 'image' | 'video' | 'file';
    url: string;
  };
}

/**
 * Representa um componente genérico do CMS
 */
export interface CMSComponent {
  id: string;
  type: string;
  fields: Record<string, any>;
}

/**
 * Representa uma referência a outro item no CMS
 */
export interface CMSReference {
  sys: {
    id: string;
    type: 'Link' | 'Entry' | 'Asset';
  };
}

/**
 * Representa uma coleção de itens paginados do CMS
 */
export interface CMSCollection<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

/**
 * Representa uma resposta da API do CMS
 */
export interface CMSResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    extensions?: Record<string, any>;
  }>;
}

/**
 * Tipos específicos para cada modelo de dados do CMS podem ser definidos aqui
 * Exemplo: ClassEntry, InstructorEntry, etc.
 */ 