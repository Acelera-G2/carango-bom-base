import AuthService from './AuthService';
  describe('AuthService', () => {
    let globalFetch;
      beforeEach(() => {
          globalFetch = global.fetch;
          global.fetch = jest.fn(() => Promise.resolve({
              json: () => Promise.resolve({
                id: 1, username: 'Leandro', password:'123456'
              })
          }));
      });
      afterEach(() => {
          global.fetch = globalFetch;
      });
      
      it(('should register userName'), async () => {
        const { username } = await AuthService.login({username: 'Leandro', password:'123456'});
        expect(username).toBe('Leandro');
      });
      it(('should register password'), async () => {
        const { password } = await AuthService.login({username: 'Leandro', password:'123456'});
        expect(password).toBe('123456');
      });
    });
      