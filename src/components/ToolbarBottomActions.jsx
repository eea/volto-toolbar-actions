import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { Plug } from '@plone/volto/components/manage/Pluggable';
import './less/editor.less';

const ToolbarBottomActions = (props) => {
  const { token } = props;
  const actions = useSelector(
    (state) => state?.actions?.actions?.toolbar_bottom_actions || [],
  );
  // isAuth AND toolbar_top_actions is present in portal_actions
  return !!token && actions?.length ? (
    <>
      <Plug
        pluggable="main.toolbar.bottom"
        id="toolbar-bottom-actions"
        order={99}
        dependencies={actions}
      >
        <div className="toolbar-bottom-actions" id="toolbar-bottom-actions">
          {actions.map((item) => {
            const hasIcon = !item?.icon?.includes('no-icon');
            const hasTitle = !item?.icon?.includes('no-title');
            return (
              <UniversalLink href={item.url} title={item.title}>
                {hasIcon ? <Icon name={item.icon} alt={item.title} /> : ''}
                {hasTitle ? <span>{item.title}</span> : ''}
              </UniversalLink>
            );
          })}
        </div>
      </Plug>
    </>
  ) : (
    ''
  );
};

ToolbarBottomActions.propTypes = {
  token: PropTypes.string,
};

export default ToolbarBottomActions;
