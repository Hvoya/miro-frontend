import React from 'react';
import pathor from '@ramda/pathor';

import { useLang } from '@/hooks/useLang';

// Take a config
function withLang(config) {
  // Return a function for getting component
  return function bindLanguage(Component) {
    // Return new component
    return function WithLangComponent(props) {
      // Take a language dict
      const dict = useLang();
      const entries = Object.entries(config);
      const newProps = { ...props };
      // Change config paths with language values
      entries.forEach((entry) => {
        const pathFragments = entry[1].split('.');
        newProps[entry[0]] = pathor('', pathFragments, dict);
      });
      // Pass language objects to wrapped component with same keys as config but with language values in place of paths
      return <Component {...newProps} />;
    };
  };
}

export default withLang;
