import VehicleService from './VehicleService';
  describe('VehicleService', () => {
    let globalFetch;
      beforeEach(() => {
          globalFetch = global.fetch;
          global.fetch = jest.fn(() => Promise.resolve({
              json: () => Promise.resolve({
                id: 1,brand:{id:2, name:'Chevrolet'},model:'Onix',value:'50000',year:'2021'
              })
          }));
      });
      afterEach(() => {
          global.fetch = globalFetch;
      });

      it(('should list Brand'), async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: () => [
            { id: 1,brand:{id:2, name:'Chevrolet'},model:'Onix',value:'50000',year:'2021'},
            {id: 2,brand:{id:4, name:'Fiesta'},model:'Ford',value:'50000',year:'2021'},
          ],
        }); 
        const list = await VehicleService.listar();
        expect(list).toBeInstanceOf(Array);
      });
      
      it(('should register new Brand'), async () => {
        const { brand } = await VehicleService.cadastrar('Chevrolet');
        expect(brand.name).toBe('Chevrolet');
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
        const { brand } = await VehicleService.consultar(1);
        expect(brand.name).toBe('Chevrolet');
      });
    
      it(('should delete Brand'), async () => {
        const { id } = await VehicleService.excluir({ id: 1, name: 'Chevrolet' });
        expect(id).toBe(1);
      });
    });
      