describe('ContextMenu keyboard shortcut', () => {
  beforeEach(function() {
    this.$container = $('<div id="testContainer"></div>').appendTo('body');
  });

  afterEach(function() {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  describe('"PageDown"', () => {
    it('should move the menu item selection to the last item that is visible in the browser viewport ' +
       'when there is no initial selection', () => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(200),
      });

      contextMenu();
      keyDownUp('pagedown');

      expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe('Test item 200');
      // check if the viewport is scrolled to the bottom
      expect(document.documentElement.scrollHeight)
        .toBe(window.scrollY + document.documentElement.clientHeight);
    });

    it('should move the menu item selection to the last item when the menu fits within the browser viewport ' +
       'and there is initial selection', () => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(10),
      });

      contextMenu();
      getPlugin('contextMenu').menu.navigator.selectFirst();
      keyDownUp('pagedown');

      const hotMenu = getPlugin('contextMenu').menu.hotMenu;

      expect(hotMenu.getSelected()).toEqual([[9, 0, 9, 0]]);
      expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe('Test item 10');
    });

    it('should move the menu item selection down by the count of visible items in the browser viewport', () => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(200),
      });

      contextMenu();
      getPlugin('contextMenu').menu.navigator.selectFirst();
      keyDownUp('pagedown');

      let firstVisibleRow = 0;

      {
        // create rows calculator that allows gather information about what rows are already
        // visible in the browser viewport. The -2 argument means that the calculator takes into
        // account rows that are partially visible.
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(startRow).toBe(firstVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${endRow}`);

        firstVisibleRow = (endRow - 1);
      }

      keyDownUp('pagedown');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(startRow).toBe(firstVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${endRow}`);

        firstVisibleRow = (endRow - 1);
      }

      keyDownUp('pagedown');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(startRow).toBe(firstVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${endRow}`);

        firstVisibleRow = (endRow - 1);
      }

      keyDownUp('pagedown');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(startRow).toBe(firstVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${endRow}`);
      }
    });
  });
});
