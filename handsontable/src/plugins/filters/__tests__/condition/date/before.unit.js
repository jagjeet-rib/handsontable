import { condition } from 'handsontable/plugins/filters/condition/date/before';
import { dateRowFactory } from '../../helpers/utils';

describe('Filters condition (`date_before`)', () => {

  using('data set', [
    {
      dateFormat: 'YYYY-MM-DD',
      testDate: '2015-12-20',
      startDate: '2015-12-24',
      assumption: true
    },
    {
      dateFormat: 'YYYY-MM-DD',
      testDate: '2015-12-20',
      startDate: '2015-12-20',
      assumption: true
    },
    {
      dateFormat: 'YYYY-MM-DD',
      testDate: '2015-12-20',
      startDate: '2017',
      assumption: true
    },
    {
      dateFormat: 'DD/MM/YY',
      testDate: '20/12/15',
      startDate: '01/01/16',
      assumption: true
    },
    {
      dateFormat: 'D.M.YY',
      testDate: '20.12.15',
      startDate: '1.1.16',
      assumption: true
    },
    {
      dateFormat: 'YYYY MMMM Do',
      testDate: '2015 February 2nd',
      startDate: '2018 March 11th',
      assumption: true
    },
    {
      dateFormat: '[The] Do [of] MMMM \'YY',
      testDate: 'The 2nd of February \'23',
      startDate: 'The 2nd of March \'33',
      assumption: true
    },
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '12/05/2015',
      assumption: true
    },
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '13/05/2015',
      assumption: true
    },
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '13/05/2099',
      assumption: true
    },
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '11/05/2015',
      assumption: false
    },

    // Improper date format configuration:
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '06/2015',
      assumption: false
    },
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '2013',
      assumption: false
    },
    {
      dateFormat: '[The] Do [of] MMMM \'YY',
      testDate: 'The 2nd of February \'23',
      startDate: '2033',
      assumption: true
    },
    {
      dateFormat: 'YYYY-MM-DD',
      testDate: '15-12-20',
      startDate: '15-12-24',
      assumption: true
    },
    {
      dateFormat: 'YY-MM-DD',
      testDate: '2015-12-20',
      startDate: '2015-12-20',
      assumption: true
    },
    {
      dateFormat: 'YYYY-M-D',
      testDate: '2015-05-03',
      startDate: '2016',
      assumption: true
    },
    {
      dateFormat: 'D.M.YY',
      testDate: '1.2.2032',
      startDate: '1.2.2045',
      assumption: true
    },

    // Unlike the others, this one doesn't get picked up by Moment.js.
    {
      dateFormat: 'DD/MM/YYYY',
      testDate: '12/05/2015',
      startDate: '2017',
      assumption: false
    }
  ], ({ dateFormat, testDate, startDate, assumption }) => {
    it('should filter matching and non-matching values (date cell type)', () => {
      const data = dateRowFactory({ type: 'date', dateFormat });

      expect(condition(data(testDate), [startDate])).toBe(assumption);
    });
  });
});
