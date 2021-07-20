import BrandService from './BrandService';
  describe('BrandService', () => {
    let globalFetch;
      beforeEach(() => {
          globalFetch = global.fetch;
          global.fetch = jest.fn(() => Promise.resolve({
              json: () => Promise.resolve({
                id: 1, name: 'Chevrolet'
              })
          }));
      });
      afterEach(() => {
          global.fetch = globalFetch;
      });

      it(('should list Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => [
            { id: 1, nome: 'Chevrolet' },
          ],
        }); 
        const list = await BrandService.listar();
        expect(list).toBeInstanceOf(Array);
      });
      
      it(('should register new Brand'), async () => {
        const { name } = await BrandService.cadastrar('Chevrolet');
        expect(name).toBe('Chevrolet');
      });
    
      it(('should register update Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => (
            { id: 1, name: 'Renault' }
          ),
        });
        const { name } = await BrandService.alterar({ id: 1, name: 'Renault' });
        expect(name).toBe('Renault');
      });
    
      it(('should search Brand'), async () => {
        const { name } = await BrandService.consultar(1);
        expect(name).toBe('Chevrolet');
      });
    
      it(('should delete Brand'), async () => {
        const { id } = await BrandService.excluir({ id: 1, name: 'Chevrolet' });
        expect(id).toBe(1);
      });
    });
      