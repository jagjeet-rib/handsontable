describe('CheckboxRenderer', () => {
  using('keyboard shortcut', [
    'Delete',
    'Backspace',
  ], (key) => {
    beforeEach(function() {
      this.$container = $('<div id="testContainer" style="width: 300px; height: 200px;"></div>').appendTo('body');
    });

    afterEach(function() {
      if (this.$container) {
        destroy();
        this.$container.remove();
      }
    });

    it('should change checkbox state to unchecked', () => {
      handsontable({
        data: [[true], [false], [true]],
        columns: [
          { type: 'checkbox' }
        ]
      });

      const afterChangeCallback = jasmine.createSpy('afterChangeCallback');

      addHook('afterChange', afterChangeCallback);

      let checkboxes = spec().$container.find(':checkbox');

      expect(checkboxes.eq(0).prop('checked')).toBe(true);
      expect(checkboxes.eq(1).prop('checked')).toBe(false);
      expect(checkboxes.eq(2).prop('checked')).toBe(true);
      expect(getData()).toEqual([[true], [false], [true]]);

      selectCell(0, 0);
      keyDownUp(key);
      selectCell(0, 1);
      keyDownUp(key);

      checkboxes = spec().$container.find(':checkbox');

      expect(checkboxes.eq(0).prop('checked')).toBe(false);
      expect(checkboxes.eq(1).prop('checked')).toBe(false);
      expect(checkboxes.eq(2).prop('checked')).toBe(true);
      expect(getData()).toEqual([[false], [false], [true]]);

      expect(afterChangeCallback.calls.count()).toEqual(2);
      expect(afterChangeCallback)
        .toHaveBeenCalledWith([[0, 0, true, false]], 'edit');
    });

    it('should change state to unchecked (from #bad-value# state)', () => {
      handsontable({
        data: [['foo'], ['bar']],
        columns: [
          { type: 'checkbox' }
        ]
      });

      const afterChangeCallback = jasmine.createSpy('afterChangeCallback');

      addHook('afterChange', afterChangeCallback);

      expect(getDataAtCell(0, 0)).toBe('foo');
      expect(getDataAtCell(1, 0)).toBe('bar');

      selectCell(0, 0);
      keyDownUp(key);
      selectCell(1, 0);
      keyDownUp(key);

      expect(getDataAtCell(0, 0)).toBe(false);
      expect(getDataAtCell(1, 0)).toBe(false);
      expect(getData()).toEqual([[false], [false]]);

      expect(afterChangeCallback.calls.count()).toEqual(2);
      expect(afterChangeCallback)
        .toHaveBeenCalledWith([[0, 0, 'foo', false]], 'edit');
    });

    it('should not change checkbox state when the column header is selected', () => {
      handsontable({
        data: [[true], [false], [true]],
        columns: [
          { type: 'checkbox' }
        ],
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      let checkboxes = spec().$container.find(':checkbox');

      expect(checkboxes.eq(0).prop('checked')).toBe(true);
      expect(checkboxes.eq(1).prop('checked')).toBe(false);
      expect(checkboxes.eq(2).prop('checked')).toBe(true);
      expect(getData()).toEqual([[true], [false], [true]]);

      selectCell(-1, 0);
      keyDownUp(key);

      checkboxes = spec().$container.find(':checkbox');

      expect(checkboxes.eq(0).prop('checked')).toBe(true);
      expect(checkboxes.eq(1).prop('checked')).toBe(false);
      expect(checkboxes.eq(2).prop('checked')).toBe(true);
      expect(getData()).toEqual([[true], [false], [true]]);
    });

    it('should not steal the event when the column header is selected', () => {
      handsontable({
        data: [[true], [true], [true]],
        columns: [
          { type: 'checkbox' }
        ],
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      const callback = jasmine.createSpy('callback');

      getShortcutManager().getContext('grid').addShortcuts([{
        keys: [[key]],
        callback,
      }], { group: 'grid' });

      selectCell(-1, 0);
      keyDownUp(key);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
