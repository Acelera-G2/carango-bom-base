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
      
      it(('should register new Brand'), async () => {
        const { username } = await DashboardService.cadastrar('Leandro');
        expect(username).toBe('Leandro');
      });
    
      it(('should register update Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => (
            { id: 1, username: 'Renault' }
          ),
        });
        const { username } = await DashboardService.alterar({ id: 1, username: 'Renault' });
        expect(username).toBe('Renault');
      });
    
      it(('should search Brand'), async () => {
        const { username } = await DashboardService.consultar(1);
        expect(username).toBe('Leandro');
      });
    
      it(('should delete Brand'), async () => {
        const { id } = await DashboardService.excluir({ id: 1, username: 'Leandro' });
        expect(id).toBe(1);
      });
    });
      