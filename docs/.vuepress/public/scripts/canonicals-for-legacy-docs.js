/* eslint-disable */
(function() {
  var docsPageRegExp = /^\/docs\/\d+\.\d+\.\d+\/.+\.html$/;

  if (!docsPageRegExp.test(location.pathname)) {
    return;
  }

  var urlsMap = [
    // tutorials
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-introduction.html$/, '/docs/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-compatibility.html$/, '/docs/supported-browsers/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-licensing.html$/, '/docs/software-license/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-license-key.html$/, '/docs/license-key/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-quick-start.html$/, '/docs/installation/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-data-binding.html$/, '/docs/binding-to-data/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-data-sources.html$/, '/docs/binding-to-data/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-load-and-save.html$/, '/docs/saving-data/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-setting-options.html$/, '/docs/setting-options/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-grid-sizing.html$/, '/docs/grid-size/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-using-callbacks.html$/, '/docs/events-and-hooks/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-keyboard-navigation.html$/, '/docs/keyboard-navigation/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-internationalization.html$/, '/docs/internationalization-i18n/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-internationalization.html$/, '/docs/internationalization-i18n/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-modules.html$/, '/docs/modules/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-custom-build.html$/, '/docs/building/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-cell-types.html$/, '/docs/cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-cell-editor.html$/, '/docs/cell-editor/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-cell-function.html$/, '/docs/cell-function/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-suspend-rendering.html$/, '/docs/batch-operations/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-testing.html$/, '/docs/testing/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-migration-guide.html$/, '/docs/migration-from-7.4-to-8.0/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-performance-tips.html$/, '/docs/performance/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-release-notes.html$/, '/docs/changelog/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-changelog.html$/, '/docs/changelog/'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-principles.html$/, '/docs/6.2.2/tutorial-principles.html'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-good-practices.html$/, '/docs/6.2.2/tutorial-good-practices.html'],
    [/\/docs\/\d+\.\d+\.\d+\/tutorial-known-limitations.html$/, '/docs/7.2.2/tutorial-known-limitations.html'],
    // frameworks React
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-installation.html$/, '/docs/react-installation/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-simple-examples.html$/, '/docs/react-simple-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-hot-column.html$/, '/docs/react-hot-column/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-setting-up-a-locale.html$/, '/docs/react-setting-up-a-language/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-custom-context-menu-example.html$/, '/docs/react-custom-context-menu-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-custom-editor-example.html$/, '/docs/react-custom-editor-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-custom-renderer-example.html$/, '/docs/react-custom-renderer-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-language-change-example.html$/, '/docs/react-language-change-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-redux-example.html$/, '/docs/react-redux-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-react-hot-reference.html$/, '/docs/react-hot-reference/'],
    // frameworks Angular
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-installation.html$/, '/docs/angular-installation/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-simple-example.html$/, '/docs/angular-simple-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-custom-id.html$/, '/docs/angular-custom-id/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-setting-up-a-locale.html$/, '/docs/angular-setting-up-a-language/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-custom-context-menu-example.html$/, '/docs/angular-custom-context-menu-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-custom-editor-example.html$/, '/docs/angular-custom-editor-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-custom-renderer-example.html$/, '/docs/angular-custom-renderer-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-language-change-example.html$/, '/docs/angular-language-change-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-angular-hot-reference.html$/, '/docs/angular-hot-reference/'],
    // frameworks Vue
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-installation.html$/, '/docs/vue-installation/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-simple-example.html$/, '/docs/vue-simple-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-hot-column.html$/, '/docs/vue-hot-column/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-setting-up-a-locale.html$/, '/docs/vue-setting-up-a-language/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-custom-id-class-style.html$/, '/docs/vue-custom-id-class-style/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-custom-context-menu-example.html$/, '/docs/vue-custom-context-menu-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-custom-editor-example.html$/, '/docs/vue-custom-editor-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-custom-renderer-example.html$/, '/docs/vue-custom-renderer-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-language-change-example.html$/, '/docs/vue-language-change-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-vuex-example.html$/, '/docs/vue-vuex-example/'],
    [/\/docs\/\d+\.\d+\.\d+\/frameworks-wrapper-for-vue-hot-reference.html$/, '/docs/vue-hot-reference/'],
    // demos
    [/\/docs\/\d+\.\d+\.\d+\/demo-scrolling.html$/, '/docs/row-virtualization/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-fixing.html$/, '/docs/column-freezing/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-resizing.html$/, '/docs/column-width/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-moving.html$/, '/docs/column-moving/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-header-tooltips.html$/, '/docs/8.4.0/demo-header-tooltips.html'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-pre-populating.html$/, '/docs/row-prepopulating/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-stretching.html$/, '/docs/column-width/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-freezing.html$/, '/docs/column-freezing/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-fixing-bottom.html$/, '/docs/row-freezing/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-hiding-rows.html$/, '/docs/row-hiding/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-hiding-columns.html$/, '/docs/column-hiding/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-trimming-rows.html$/, '/docs/row-trimming/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-bind-rows-headers.html$/, '/docs/row-header/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-collapsing-columns.html$/, '/docs/column-groups/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-nested-headers.html$/, '/docs/column-groups/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-nested-rows.html$/, '/docs/row-parent-child/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-dropdown-menu.html$/, '/docs/column-menu/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-sorting.html$/, '/docs/rows-sorting/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-multicolumn-sorting.html$/, '/docs/rows-sorting/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-searching.html$/, '/docs/searching-values/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-filtering.html$/, '/docs/column-filter/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-summary-calculations.html$/, '/docs/column-summary/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-data-validation.html$/, '/docs/cell-validator/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-auto-fill.html$/, '/docs/autofill-values/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-merged-cells.html$/, '/docs/merge-cells/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-alignment.html$/, '/docs/text-alignment/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-read-only.html$/, '/docs/disabled-cells/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-disabled-editing.html$/, '/docs/disabled-cells/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-custom-renderers.html$/, '/docs/cell-renderer/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-numeric.html$/, '/docs/numeric-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-date.html$/, '/docs/date-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-time.html$/, '/docs/time-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-checkbox.html$/, '/docs/checkbox-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-select.html$/, '/docs/select-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-dropdown.html$/, '/docs/dropdown-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-autocomplete.html$/, '/docs/autocomplete-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-password.html$/, '/docs/password-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-handsontable.html$/, '/docs/handsontable-cell-type/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-context-menu.html$/, '/docs/context-menu/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-custom-buttons.html$/, '/docs/8.4.0/demo-custom-buttons.html'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-spreadsheet-icons.html$/, '/docs/icon-pack/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-comments_.html$/, '/docs/comments/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-copy-paste.html$/, '/docs/basic-clipboard/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-export-file.html$/, '/docs/export-to-csv/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-conditional-formatting.html$/, '/docs/conditional-formatting/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-customizing-borders.html$/, '/docs/formatting-cells/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-selecting-ranges.html$/, '/docs/selection/'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-highlighting-selection.html$/, '/docs/8.4.0/demo-highlighting-selection.html'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-mobiles-and-tablets.html$/, '/docs/8.4.0/demo-mobiles-and-tablets.html'],
    [/\/docs\/\d+\.\d+\.\d+\/demo-formula-support.html$/, '/docs/formula-calculation/'],
    // core
    [/\/docs\/\d+\.\d+\.\d+\/Core.html$/, '/docs/api/core/'],
    [/\/docs\/\d+\.\d+\.\d+\/Hooks.html$/, '/docs/api/hooks/'],
    [/\/docs\/\d+\.\d+\.\d+\/Options.html$/, '/docs/api/options/'],
    // plugins
    [/\/docs\/\d+\.\d+\.\d+\/AutoColumnSize.html$/, '/docs/api/auto-column-size/'],
    [/\/docs\/\d+\.\d+\.\d+\/AutoRowSize.html$/, '/docs/api/auto-row-size/'],
    [/\/docs\/\d+\.\d+\.\d+\/Autofill.html$/, '/docs/api/autofill/'],
    [/\/docs\/\d+\.\d+\.\d+\/BindRowsWithHeaders.html$/, '/docs/api/bind-rows-with-headers/'],
    [/\/docs\/\d+\.\d+\.\d+\/CollapsibleColumns.html$/, '/docs/api/collapsible-columns/'],
    [/\/docs\/\d+\.\d+\.\d+\/ColumnSorting.html$/, '/docs/api/column-sorting/'],
    [/\/docs\/\d+\.\d+\.\d+\/ColumnSummary.html$/, '/docs/api/column-summary/'],
    [/\/docs\/\d+\.\d+\.\d+\/Comments.html$/, '/docs/api/comments/'],
    [/\/docs\/\d+\.\d+\.\d+\/ContextMenu.html$/, '/docs/api/context-menu/'],
    [/\/docs\/\d+\.\d+\.\d+\/CopyPaste.html$/, '/docs/api/copy-paste/'],
    [/\/docs\/\d+\.\d+\.\d+\/CustomBorders.html$/, '/docs/api/custom-borders/'],
    [/\/docs\/\d+\.\d+\.\d+\/DragToScroll.html$/, '/docs/api/drag-to-scroll/'],
    [/\/docs\/\d+\.\d+\.\d+\/DropdownMenu.html$/, '/docs/api/dropdown-menu/'],
    [/\/docs\/\d+\.\d+\.\d+\/ExportFile.html$/, '/docs/api/export-file/'],
    [/\/docs\/\d+\.\d+\.\d+\/Filters.html$/, '/docs/api/filters/'],
    [/\/docs\/\d+\.\d+\.\d+\/Formulas.html$/, '/docs/api/formulas/'],
    [/\/docs\/\d+\.\d+\.\d+\/HeaderTooltips.html$/, '/docs/8.4.0/HeaderTooltips.html'],
    [/\/docs\/\d+\.\d+\.\d+\/HiddenColumns.html$/, '/docs/api/hidden-columns/'],
    [/\/docs\/\d+\.\d+\.\d+\/HiddenRows.html$/, '/docs/api/hidden-rows/'],
    [/\/docs\/\d+\.\d+\.\d+\/ManualColumnFreeze.html$/, '/docs/api/manual-column-freeze/'],
    [/\/docs\/\d+\.\d+\.\d+\/ManualColumnMove.html$/, '/docs/api/manual-column-move/'],
    [/\/docs\/\d+\.\d+\.\d+\/ManualColumnResize.html$/, '/docs/api/manual-column-resize/'],
    [/\/docs\/\d+\.\d+\.\d+\/ManualRowMove.html$/, '/docs/api/manual-row-move/'],
    [/\/docs\/\d+\.\d+\.\d+\/ManualRowResize.html$/, '/docs/api/manual-row-resize/'],
    [/\/docs\/\d+\.\d+\.\d+\/MergeCells.html$/, '/docs/api/merge-cells/'],
    [/\/docs\/\d+\.\d+\.\d+\/MultiColumnSorting.html$/, '/docs/api/multi-column-sorting/'],
    [/\/docs\/\d+\.\d+\.\d+\/NestedHeaders.html$/, '/docs/api/nested-headers/'],
    [/\/docs\/\d+\.\d+\.\d+\/NestedRows.html$/, '/docs/api/nested-rows/'],
    [/\/docs\/\d+\.\d+\.\d+\/ObserveChanges.html$/, '/docs/8.4.0/ObserveChanges.html'],
    [/\/docs\/\d+\.\d+\.\d+\/PersistentState.html$/, '/docs/api/persistent-state/'],
    [/\/docs\/\d+\.\d+\.\d+\/Search.html$/, '/docs/api/search/'],
    [/\/docs\/\d+\.\d+\.\d+\/TrimRows.html$/, '/docs/api/trim-rows/'],
    [/\/docs\/\d+\.\d+\.\d+\/UndoRedo.html$/, '/docs/api/undo-redo/'],
    // API extras
    [/\/docs\/\d+\.\d+\.\d+\/ActionBarComponent.html$/, '/docs/8.4.0/ActionBarComponent.html'],
    [/\/docs\/\d+\.\d+\.\d+\/AggregatedCollection.html$/, '/docs/api/aggregated-collection/'],
    [/\/docs\/\d+\.\d+\.\d+\/AlterManager.html$/, '/docs/8.4.0/AlterManager.html'],
    [/\/docs\/\d+\.\d+\.\d+\/AutofillCalculations.html$/, '/docs/8.4.0/AutofillCalculations.html'],
    [/\/docs\/\d+\.\d+\.\d+\/BacklightUI.html$/, '/docs/8.4.0/BacklightUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/BaseCell.html$/, '/docs/8.4.0/BaseCell.html'],
    [/\/docs\/\d+\.\d+\.\d+\/BaseComponent.html$/, '/docs/8.4.0/BaseComponent.html'],
    [/\/docs\/\d+\.\d+\.\d+\/BaseEditor.html$/, '/docs/api/base-editor/'],
    [/\/docs\/\d+\.\d+\.\d+\/BasePlugin.html$/, '/docs/api/base-plugin/'],
    [/\/docs\/\d+\.\d+\.\d+\/CellCoords.html$/, '/docs/api/cell-coords/'],
    [/\/docs\/\d+\.\d+\.\d+\/CellRange.html$/, '/docs/api/cell-range/'],
    [/\/docs\/\d+\.\d+\.\d+\/CellReference.html$/, '/docs/8.4.0/CellReference.html'],
    [/\/docs\/\d+\.\d+\.\d+\/CellValue.html$/, '/docs/8.4.0/CellValue.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ChangesObservable.html$/, '/docs/8.4.0/ChangesObservable.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ChangesObserver.html$/, '/docs/api/changes-observer/'],
    [/\/docs\/\d+\.\d+\.\d+\/ColumnStatesManager.html$/, '/docs/8.4.0/ColumnStatesManager.html'],
    [/\/docs\/\d+\.\d+\.\d+\/CommandExecutor.html$/, '/docs/8.4.0/CommandExecutor.html'],
    [/\/docs\/\d+\.\d+\.\d+\/CommentEditor.html$/, '/docs/8.4.0/CommentEditor.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ConditionCollection.html$/, '/docs/8.4.0/ConditionCollection.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ConditionComponent.html$/, '/docs/8.4.0/ConditionComponent.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ConditionUpdateObserver.html$/, '/docs/8.4.0/ConditionUpdateObserver.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Cursor.html$/, '/docs/8.4.0/Cursor.html'],
    [/\/docs\/\d+\.\d+\.\d+\/DataFilter.html$/, '/docs/8.4.0/DataFilter.html'],
    [/\/docs\/\d+\.\d+\.\d+\/DataMap.html$/, '/docs/api/data-map/'],
    [/\/docs\/\d+\.\d+\.\d+\/DataObserver.html$/, '/docs/8.4.0/DataObserver.html'],
    [/\/docs\/\d+\.\d+\.\d+\/DataProvider.html$/, '/docs/8.4.0/DataProvider.html'],
    [/\/docs\/\d+\.\d+\.\d+\/DisplaySwitch.html$/, '/docs/8.4.0/DisplaySwitch.html'],
    [/\/docs\/\d+\.\d+\.\d+\/EditorManager.html$/, '/docs/8.4.0/EditorManager.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Endpoints.html$/, '/docs/8.4.0/Endpoints.html'],
    [/\/docs\/\d+\.\d+\.\d+\/EventManager.html$/, '/docs/8.4.0/EventManager.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ExpressionModifier.html$/, '/docs/8.4.0/ExpressionModifier.html'],
    [/\/docs\/\d+\.\d+\.\d+\/FocusableWrapper.html$/, '/docs/8.4.0/FocusableWrapper.html'],
    [/\/docs\/\d+\.\d+\.\d+\/GhostTable.html$/, '/docs/api/ghost-table/'],
    [/\/docs\/\d+\.\d+\.\d+\/GuidelineUI.html$/, '/docs/8.4.0/GuidelineUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Highlight.html$/, '/docs/8.4.0/Highlight.html'],
    [/\/docs\/\d+\.\d+\.\d+\/IndexesSequence.html$/, '/docs/api/indexes-sequence/'],
    [/\/docs\/\d+\.\d+\.\d+\/IndexMap.html$/, '/docs/api/index-map/'],
    [/\/docs\/\d+\.\d+\.\d+\/IndexMapper.html$/, '/docs/api/index-mapper/'],
    [/\/docs\/\d+\.\d+\.\d+\/InputUI.html$/, '/docs/8.4.0/InputUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Interval.html$/, '/docs/8.4.0/Interval.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ItemsFactory.html$/, '/docs/8.4.0/ItemsFactory.html'],
    [/\/docs\/\d+\.\d+\.\d+\/LinkedList.html$/, '/docs/8.4.0/LinkedList.html'],
    [/\/docs\/\d+\.\d+\.\d+\/LinkedPhysicalIndexToValueMap.html$/, '/docs/api/linked-physical-index-to-value-map/'],
    [/\/docs\/\d+\.\d+\.\d+\/LinkUI.html$/, '/docs/8.4.0/LinkUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/LooseBindsMap.html$/, '/docs/8.4.0/LooseBindsMap.html'],
    [/\/docs\/\d+\.\d+\.\d+\/MapCollection.html$/, '/docs/api/map-collection/'],
    [/\/docs\/\d+\.\d+\.\d+\/Matrix.html$/, '/docs/8.4.0/Matrix.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Menu.html$/, '/docs/api/menu/'],
    [/\/docs\/\d+\.\d+\.\d+\/MergeCellsAction.html$/, '/docs/8.4.0/MergeCellsAction.html'],
    [/\/docs\/\d+\.\d+\.\d+\/MergedCellCoords.html$/, '/docs/8.4.0/MergedCellCoords.html'],
    [/\/docs\/\d+\.\d+\.\d+\/MergedCellsCollection.html$/, '/docs/8.4.0/MergedCellsCollection.html'],
    [/\/docs\/\d+\.\d+\.\d+\/MultipleSelectUI.html$/, '/docs/8.4.0/MultipleSelectUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/NodeStructure.html$/, '/docs/8.4.0/NodeStructure.html'],
    [/\/docs\/\d+\.\d+\.\d+\/OperatorsComponent.html$/, '/docs/8.4.0/OperatorsComponent.html'],
    [/\/docs\/\d+\.\d+\.\d+\/PhysicalIndexToValueMap.html$/, '/docs/api/physical-index-to-value-map/'],
    [/\/docs\/\d+\.\d+\.\d+\/Queue.html$/, '/docs/8.4.0/Queue.html'],
    [/\/docs\/\d+\.\d+\.\d+\/RadioInputUI.html$/, '/docs/8.4.0/RadioInputUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/SamplesGenerator.html$/, '/docs/api/samples-generator/'],
    [/\/docs\/\d+\.\d+\.\d+\/Selection.html$/, '/docs/8.4.0/Selection.html'],
    [/\/docs\/\d+\.\d+\.\d+\/SelectionCalculations.html$/, '/docs/8.4.0/SelectionCalculations.html'],
    [/\/docs\/\d+\.\d+\.\d+\/SelectionRange.html$/, '/docs/8.4.0/SelectionRange.html'],
    [/\/docs\/\d+\.\d+\.\d+\/SelectUI.html$/, '/docs/8.4.0/SelectUI.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Sheet.html$/, '/docs/8.4.0/Sheet.html'],
    [/\/docs\/\d+\.\d+\.\d+\/SourceSettings.html$/, '/docs/8.4.0/SourceSettings.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Stack.html$/, '/docs/8.4.0/Stack.html'],
    [/\/docs\/\d+\.\d+\.\d+\/StateManager.html$/, '/docs/8.4.0/StateManager.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Storage.html$/, '/docs/8.4.0/Storage.html'],
    [/\/docs\/\d+\.\d+\.\d+\/StrictBindsMap.html$/, '/docs/8.4.0/StrictBindsMap.html'],
    [/\/docs\/\d+\.\d+\.\d+\/TableView.html$/, '/docs/8.4.0/TableView.html'],
    [/\/docs\/\d+\.\d+\.\d+\/TextEditor_TextEditor.html$/, '/docs/8.4.0/TextEditor_TextEditor.html'],
    [/\/docs\/\d+\.\d+\.\d+\/Transformation.html$/, '/docs/8.4.0/Transformation.html'],
    [/\/docs\/\d+\.\d+\.\d+\/TrimmingMap.html$/, '/docs/api/trimming-map/'],
    [/\/docs\/\d+\.\d+\.\d+\/UndoRedoSnapshot.html$/, '/docs/8.4.0/UndoRedoSnapshot.html'],
    [/\/docs\/\d+\.\d+\.\d+\/UnmergeCellsAction.html$/, '/docs/8.4.0/UnmergeCellsAction.html'],
    [/\/docs\/\d+\.\d+\.\d+\/ValueComponent.html$/, '/docs/8.4.0/ValueComponent.html'],
  ];

  function getURLPathname(pathname) {
    var newPathname = pathname;

    for (var index = 0; index < urlsMap.length; index++) {
      var tester = urlsMap[index][0];

      if (tester.test(pathname)) {
        newPathname = urlsMap[index][1];
        break;
      }
    }

    return newPathname;
  }

  var link = document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link');

  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', location.protocol + '//' + location.host + getURLPathname(location.pathname));

  document.head.appendChild(link);
}());
