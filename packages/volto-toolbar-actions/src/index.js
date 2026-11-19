import { default as ToolbarTopActions } from './components/ToolbarTopActions';
import { default as ToolbarBottomActions } from './components/ToolbarBottomActions';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: ToolbarTopActions,
    },
    {
      match: '',
      component: ToolbarBottomActions,
    },
  ];
  return config;
};

export default applyConfig;
