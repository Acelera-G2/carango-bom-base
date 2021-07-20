import VehicleService from './VehicleService';
  describe('VehicleService', () => {
    let globalFetch;
      beforeEach(() => {
          globalFetch = global.fetch;
          global.fetch = jest.fn(() => Promise.resolve({
              json: () => Promise.resolve({
                id: 1,brandId:1,model:'Onix',value:'50000',year:'2021', name: 'Chevrolet'
              })
          }));
      });
      afterEach(() => {
          global.fetch = globalFetch;
      });

      it(('should list Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => [
            { id: 1,brandId:1,model:'Onix',value:'50000',year:'2021', name: 'Chevrolet' },
            { id: 2,brandId:2,model:'Fiesta',value:'50000',year:'2015', name: 'Ford' },
          ],
        }); 
        const list = await VehicleService.listar();
        expect(list).toBeInstanceOf(Array);
      });
      
      it(('should register new Brand'), async () => {
        const { name } = await VehicleService.cadastrar('Chevrolet');
        expect(name).toBe('Chevrolet');
      });
    
      it(('should register update Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => (
            { id: 1, model: 'Cobalt' }
          ),
        });
        const { model } = await VehicleService.alterar({ id: 1, model: 'Cobalt' });
        expect(model).toBe('Cobalt');
      });
    
      it(('should search Brand'), async () => {
        const { name } = await VehicleService.consultar(1);
        expect(name).toBe('Chevrolet');
      });
    
      it(('should delete Brand'), async () => {
        const { id } = await VehicleService.excluir({ id: 1, name: 'Chevrolet' });
        expect(id).toBe(1);
      });
    });
      