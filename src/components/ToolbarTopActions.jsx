import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Plug } from '@plone/volto/components/manage/Pluggable';
import { default as ToolbarAction } from './ToolbarAction';
import './less/editor.less';

const ToolbarTopActions = (props) => {
  const { token } = props;
  const actions = useSelector(
    (state) => state?.actions?.actions?.toolbar_top_actions || [],
  );
  // isAuth AND toolbar_top_actions is present in portal_actions
  return !!token && actions?.length ? (
    <>
      <Plug
        pluggable="main.toolbar.top"
        id="toolbar-top-actions"
        order={99}
        dependencies={actions}
      >
        <div className="toolbar-top-actions" id="toolbar-top-actions">
          {actions.map((item) => (
            <ToolbarAction key={item.id} item={item} />
          ))}
        </div>
      </Plug>
    </>
  ) : (
    ''
  );
};

ToolbarTopActions.propTypes = {
  token: PropTypes.string,
};

export default ToolbarTopActions;
