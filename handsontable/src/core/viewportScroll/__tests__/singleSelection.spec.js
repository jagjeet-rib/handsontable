describe('Single selection scroll', () => {
  const id = 'testContainer';

  beforeEach(function() {
    this.$container = $(`<div id="${id}"></div>`).appendTo('body');
  });

  afterEach(function() {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  describe('for partially visible cell on the right table\'s edge', () => {
    it('should not scroll the viewport after mouse click', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `F1` cell is partially visible on the right side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      simulateClick(getCell(0, 5));

      expect(inlineStartOverlay().getScrollPosition()).toBe(25);
    });

    it('should scroll the viewport after double mouse click (cell editing)', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `F1` cell is partially visible on the right side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      mouseDoubleClick(getCell(0, 5));

      expect(inlineStartOverlay().getScrollPosition()).toBe(51);
    });

    it('should scroll the viewport after navigating using ArrowRight key', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `F1` cell is partially visible on the right side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(0, 4);
      keyDownUp('arrowright');

      expect(inlineStartOverlay().getScrollPosition()).toBe(51);
    });

    it('should scroll the viewport after navigating through the column headers using ArrowRight key', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      // make sure that the `F1` cell is partially visible on the right side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(-1, 4);
      keyDownUp('arrowright');

      expect(inlineStartOverlay().getScrollPosition()).toBe(51);
    });

    it('should scroll the viewport after using API', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `F1` cell is partially visible on the right side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(0, 5);

      expect(inlineStartOverlay().getScrollPosition()).toBe(51);
    });
  });

  describe('for partially visible cell on the left table\'s edge', () => {
    it('should scroll the viewport after mouse click', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the left side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      simulateClick(getCell(0, 0));

      expect(inlineStartOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after double mouse click (cell editing)', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the left side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      mouseDoubleClick(getCell(0, 0));

      expect(inlineStartOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after navigating using ArrowLeft key', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the left side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(0, 1);
      keyDownUp('arrowleft');

      expect(inlineStartOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after navigating through the column headers using ArrowLeft key', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the left side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(-1, 1);
      keyDownUp('arrowleft');

      expect(inlineStartOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after using API', async() => {
      handsontable({
        data: createSpreadsheetData(5, 10),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the left side of the table
      inlineStartOverlay().setScrollPosition(25);

      await sleep(10);

      selectCell(0, 0);

      expect(inlineStartOverlay().getScrollPosition()).toBe(0);
    });
  });

  describe('for partially visible cell on the top table\'s edge', () => {
    it('should scroll the viewport after mouse click', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the top side of the table
      topOverlay().setScrollPosition(15);

      await sleep(10);

      simulateClick(getCell(0, 0));

      expect(topOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after double mouse click (cell editing)', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the top side of the table
      topOverlay().setScrollPosition(15);

      await sleep(10);

      mouseDoubleClick(getCell(0, 0));

      expect(topOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after navigating using ArrowUp key', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the top side of the table
      topOverlay().setScrollPosition(15);

      await sleep(10);

      selectCell(1, 0);
      keyDownUp('arrowup');

      expect(topOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after navigating through the row headers using ArrowUp key', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the top side of the table
      topOverlay().setScrollPosition(15);

      await sleep(10);

      selectCell(1, -1);
      keyDownUp('arrowup');

      expect(topOverlay().getScrollPosition()).toBe(0);
    });

    it('should scroll the viewport after using API', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A1` cell is partially visible on the top side of the table
      topOverlay().setScrollPosition(15);

      await sleep(10);

      selectCell(0, 0);

      expect(topOverlay().getScrollPosition()).toBe(0);
    });
  });

  describe('for partially visible cell on the bottom table\'s edge', () => {
    it('should not scroll the viewport after mouse click', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A12` cell is partially visible on the bottom side of the table
      topOverlay().setScrollPosition(5);

      await sleep(10);

      simulateClick(getCell(11, 0));

      expect(topOverlay().getScrollPosition()).toBe(5);
    });

    it('should scroll the viewport after double mouse click (cell editing)', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A12` cell is partially visible on the bottom side of the table
      topOverlay().setScrollPosition(5);

      await sleep(10);

      mouseDoubleClick(getCell(11, 0));

      expect(topOverlay().getScrollPosition()).toBe(19);
    });

    it('should scroll the viewport after navigating using ArrowDown key', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A12` cell is partially visible on the bottom side of the table
      topOverlay().setScrollPosition(5);

      await sleep(10);

      selectCell(10, 0);
      keyDownUp('arrowdown');

      expect(topOverlay().getScrollPosition()).toBe(19);
    });

    it('should scroll the viewport after navigating through the row headers using ArrowDown key', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
        navigableHeaders: true,
      });

      // make sure that the `A12` cell is partially visible on the bottom side of the table
      topOverlay().setScrollPosition(5);

      await sleep(10);

      selectCell(10, -1);
      keyDownUp('arrowdown');

      expect(topOverlay().getScrollPosition()).toBe(19);
    });

    it('should scroll the viewport after using API', async() => {
      handsontable({
        data: createSpreadsheetData(20, 5),
        width: 300,
        height: 300,
        rowHeaders: true,
        colHeaders: true,
      });

      // make sure that the `A12` cell is partially visible on the bottom side of the table
      topOverlay().setScrollPosition(5);

      await sleep(10);

      selectCell(11, 0);

      expect(topOverlay().getScrollPosition()).toBe(19);
    });
  });
});
