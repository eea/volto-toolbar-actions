import { default as ToolbarActions } from './components/ToolbarActions';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: ToolbarActions,
    },
  ];
  return config;
};

export default applyConfig;
