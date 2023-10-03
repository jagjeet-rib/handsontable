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

  describe('"PageUp"', () => {
    it('should move the menu item selection to the first item that is visible in the browser viewport' +
       'when there is no initial selection', async() => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(200),
      });

      contextMenu();
      window.scrollTo(0, 1000);

      await sleep(100);

      keyDownUp('pageup');

      expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe('Test item 1');
      expect(window.scrollY).toBe(1);
    });

    it('should move the menu item selection to the first item when the menu fits within the browser viewport' +
       'and there is initial selection', () => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(10),
      });

      contextMenu();
      getPlugin('contextMenu').menu.navigator.selectLast();
      keyDownUp('pageup');

      const hotMenu = getPlugin('contextMenu').menu.hotMenu;

      expect(hotMenu.getSelected()).toEqual([[0, 0, 0, 0]]);
      expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe('Test item 1');
    });

    it('should move the menu item selection up by the count of visible items in the browser viewport', async() => {
      handsontable({
        contextMenu: generateRandomContextMenuItems(200),
      });

      contextMenu();
      getPlugin('contextMenu').menu.navigator.selectLast();

      window.scrollTo(0, document.documentElement.scrollHeight);

      await sleep(100);

      keyDownUp('pageup');

      let lastVisibleRow = 199;

      {
        // create rows calculator that allows gather information about what rows are already
        // visible in the browser viewport. The -2 argument means that the calculator takes into
        // account rows that are partially visible.
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(endRow).toBe(lastVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${startRow + 1}`);

        lastVisibleRow = startRow;
      }

      keyDownUp('pageup');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(endRow).toBe(lastVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${startRow + 1}`);

        lastVisibleRow = startRow;
      }

      keyDownUp('pageup');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(endRow).toBe(lastVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${startRow + 1}`);

        lastVisibleRow = startRow;
      }

      keyDownUp('pageup');

      {
        const {
          startRow,
          endRow,
        } = getPlugin('contextMenu').menu.hotMenu.view._wt.wtViewport.createRowsCalculator(-2);

        expect(endRow).toBe(lastVisibleRow);
        expect(getPlugin('contextMenu').menu.getSelectedItem().name).toBe(`Test item ${startRow + 1}`);
      }
    });
  });
});
