import UserService from './UserService';
  describe('UserService', () => {
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

      it(('should list Vehicle'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => [
            { id: 1, username: 'Leandro' },
          ],
        }); 
        const list = await UserService.listar();
        expect(list).toBeInstanceOf(Array);
      });
      
      it(('should register new Vehicle'), async () => {
        const { username } = await UserService.cadastrar('Leandro');
        expect(username).toBe('Leandro');
      });
    
      it(('should register update Vehicle'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => (
            { id: 1, username: 'Renault' }
          ),
        });
        const { username } = await UserService.alterar({ id: 1, username: 'Renault' });
        expect(username).toBe('Renault');
      });
    
      it(('should search Vehicle'), async () => {
        const { username } = await UserService.consultar(1);
        expect(username).toBe('Leandro');
      });
    
      it(('should delete Vehicle'), async () => {
        const { id } = await UserService.excluir({ id: 1, username: 'Leandro' });
        expect(id).toBe(1);
      });
    });
      