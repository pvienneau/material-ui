  /* eslint-env mocha */
  import React from 'react';
  import {mount} from 'enzyme';
  import {assert} from 'chai';
  import Tooltip from 'src/internal/tooltip';
  import getMuiTheme from 'src/styles/getMuiTheme';

  describe('<IconButton />', () => {
    const muiTheme = getMuiTheme();
    const mountWithContext = (node) => mount(node, {context: {muiTheme}});


    it('should not throw a warning when defining a tooltip', () => {
      const wrapper = mountWithContext(
        <Tooltip
          label="Hello World"
          verticalPosition="bottom"
          horizontalPosition="center"
        />
      );

      assert.notStrictEqual(wrapper.state('offsetWidth'), undefined);
    });
  });
