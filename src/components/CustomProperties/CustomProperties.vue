<template lang="pug">
component(
  :is="'style'",
  data-polaris-custom-properties="",
  v-html="rawStyles"
)
component(
  v-bind="$attrs",
  :is="as",
  :p-color-scheme="colorScheme",
  :style="{ color: 'var(--p-text)' }",
)
  slot
</template>
<script setup lang="ts">
import { computed } from 'vue';
import rawStyles from '@shopify/polaris-tokens/css/styles.scss?inline';
import { DEFAULT_COLOR_SCHEME, STYLE_SHEET_ID } from './utils';
import type { CustomPropertiesProps } from './utils';

defineProps({
  colorScheme: {
    type: String as () => CustomPropertiesProps['colorScheme'],
    default: DEFAULT_COLOR_SCHEME,
  },

  as: {
    type: String as () => CustomPropertiesProps['as'],
    default: 'div',
  },
});
</script>
