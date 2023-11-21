import type { Schema, Attribute } from '@strapi/strapi';

export interface StringUne extends Schema.Component {
  collectionName: 'components_string_unes';
  info: {
    displayName: 'une';
    icon: 'cloud';
  };
  attributes: {
    UneText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'string.une': StringUne;
    }
  }
}
