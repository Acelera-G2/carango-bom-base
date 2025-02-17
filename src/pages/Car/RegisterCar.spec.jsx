import React from 'react';
import RegisterCar from './RegisterCar';
import { render, screen, act } from '@testing-library/react';
import VehicleService from '../../services/VehicleService/VehicleService';
import { Route, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

const brands = [
  { id: 1, name: 'CHEVROLET' },
  { id: 2, name: 'FIAT' },
  { id: 3, name: 'VOLKS' },
];

const vehicleMock = {
  id: 1,
  model: "Argo",
  year: "2021",
  value: "70000",
  brand: brands[1],
};


const getAllBrandsSpy = jest.spyOn(VehicleService, "cadastrar");

const getVehicleSpy = jest.spyOn(VehicleService, "consultar")
let testLocation;
let pushSpy;
const history = createMemoryHistory();
const setup = (vehicleId) => {
    const path = vehicleId ? "/change-vehicle/:id" : "/register-vehicle";
    const entry = vehicleId ? `/change-vehicle/${vehicleId}` : "/register-vehicle";
  return render(
    <MemoryRouter initialEntries={['/', entry]} initialIndex={1}>
      <Route path={path}>
        <RegisterCar />
      </Route>
      <Route
        path="*"
        render={({ _, location }) => {
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>
  );
};

describe('<VehicleRegister />', () => {
  beforeEach(async () => {
    pushSpy = jest.spyOn(history, 'push');
    act(async () => setup());
  });

  it('Should render VehicleRegister with form', () => {
    const brandsSelect = screen.getByTestId('select');
    const inputVehicleModel = screen.getByRole('textbox', { name: /Modelo/i });
    const inputVehicleYear = screen.getByRole('textbox', { name: /Ano/i });
    const inputVehicleValue = screen.getByRole('textbox', { name: /Valor/i });
    const submitBtn = screen.getByRole('button', { name: /Cadastrar/i });
    const cancelBtn = screen.getByRole('button', { name: /Cancelar/i });

    expect(brandsSelect).toBeInTheDocument();
    expect(inputVehicleModel).toBeInTheDocument();
    expect(inputVehicleYear).toBeInTheDocument();
    expect(inputVehicleValue).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  it('Should show error message when input model is invalid', async () => {
    const inputVehicleModel = screen.getByRole('textbox', { name: /Modelo/i });
    const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputVehicleModel, 'wo');
    userEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      /Modelo tem que ser maior que 3 caracteres./i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it('Should show error message when input year is invalid', async () => {
    const inputVehicleYear = screen.getByRole('textbox', { name: /Ano/i });
    const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputVehicleYear, '20');
    userEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      /Ano tem que ser maior que 3 caracteres./i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it('Should show error message when input price is invalid', async () => {
    const inputVehiclePrice = screen.getByRole('textbox', { name: /Valor/i });
    const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputVehiclePrice, '20');
    userEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
        /Valor tem que ser maior que 3 caracteres./i
    );

    expect(errorMessage).toBeInTheDocument();
  });

});
describe("Update existing vehicle", () => {
    beforeEach(async () => {
      getAllBrandsSpy.mockResolvedValue(brands);
      getVehicleSpy.mockResolvedValue( vehicleMock );
      act(async () => setup(vehicleMock.id));
    });

    describe("It loads the vehicle data into the form", () => {
      it("should render the vehicle model fetched from the param id", () => {
        const input = screen.getByRole("textbox", { name: /Modelo/i });
        expect(input.value).toStrictEqual(vehicleMock.model);
      });
      it("should render the vehicle year fetched from the param id", () => {
        const input = screen.getByRole("textbox", { name: /Ano/i });
        expect(input.value).toStrictEqual(vehicleMock.year);
      });
      it("should render the vehicle price fetched from the param id", () => {
        const input = screen.getByRole("textbox", { name: /Valor/i });
        expect(input.value).toStrictEqual(vehicleMock.value);
      });
    });
   });