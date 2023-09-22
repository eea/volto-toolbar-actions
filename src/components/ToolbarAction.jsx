import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

const ToolbarAction = (props) => {
  const { item } = props;
  const hasIcon = !item?.icon?.includes('no-icon');
  const hasTitle = !item?.icon?.includes('no-title');
  return (
    <UniversalLink href={item.url} title={item.title}>
      {hasIcon ? <Icon name={item.icon} alt={item.title} /> : ''}
      {hasTitle ? <span>{item.title}</span> : ''}
    </UniversalLink>
  );
};

ToolbarAction.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  }),
};

export default ToolbarAction;
