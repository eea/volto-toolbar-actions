import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { Plug } from '@plone/volto/components/manage/Pluggable';
import './less/editor.less';

const ToolbarActions = (props) => {
  const { token } = props;
  const actions = useSelector(
    (state) => state?.actions?.actions?.toolbar_actions || [],
  );
  // isAuth AND actions
  return !!token && actions?.length ? (
    <>
      <Plug
        pluggable="main.toolbar.top"
        id="volto-toolbar-actions"
        order={99}
        dependencies={actions}
      >
        <div className="volto-toolbar-actions" id="volto-toolbar-actions">
          {actions.map((item) => (
            <UniversalLink href={item.url} title={item.title}>
              <Icon name={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </UniversalLink>
          ))}
        </div>
      </Plug>
    </>
  ) : (
    ''
  );
};

ToolbarActions.propTypes = {};

export default ToolbarActions;
