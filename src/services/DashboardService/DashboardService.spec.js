import DashboardService from './DashboardService';
  describe('DashboardService', () => {
    let globalFetch;
      beforeEach(() => {
          globalFetch = global.fetch;
          global.fetch = jest.fn(() => Promise.resolve({
              json: () => Promise.resolve({
                id: 1, username: 'Leandro'
              })
          }));
      });
      afterEach(() => {
          global.fetch = globalFetch;
      });

      it(('should list Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => [
            { id: 1, username: 'Leandro' },
          ],
        }); 
        const list = await DashboardService.listar();
        expect(list).toBeInstanceOf(Array);
      });
    });
      