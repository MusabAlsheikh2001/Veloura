import { absUrl, SITE } from './site.config';
import { htmlLocale, Lang } from './i18n';

export type SchemaNode = Record<string, unknown>;

export interface SchemaBreadcrumb {
  name: string;
  path: string;
}

export interface SchemaListItem {
  name: string;
  path: string;
  type?: 'Thing' | 'Service' | 'Article' | 'Place';
}

interface PageSchemaOptions {
  url: string;
  name: string;
  description: string;
  language: Lang;
  breadcrumbs: SchemaBreadcrumb[];
  additional?: SchemaNode[];
  mainEntityId?: string;
}

/** Build the shared WebPage + Breadcrumb graph used by every indexable page. */
export function pageSchema(options: PageSchemaOptions): SchemaNode {
  const breadcrumbId = `${options.url}#breadcrumb`;
  const webPage: SchemaNode = {
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    inLanguage: htmlLocale(options.language),
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
    breadcrumb: { '@id': breadcrumbId },
    ...(options.mainEntityId ? { mainEntity: { '@id': options.mainEntityId } } : {}),
  };

  const breadcrumbs: SchemaNode = {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: options.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [webPage, breadcrumbs, ...(options.additional || [])],
  };
}

/** Build a crawlable collection with stable URLs for every visible list item. */
export function itemListSchema(
  id: string,
  name: string,
  items: SchemaListItem[]
): SchemaNode {
  return {
    '@type': 'ItemList',
    '@id': id,
    name,
    numberOfItems: items.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absUrl(item.path),
      item: {
        '@type': item.type || 'Thing',
        name: item.name,
        url: absUrl(item.path),
      },
    })),
  };
}
