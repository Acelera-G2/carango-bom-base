import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import {
  screen,
  fireEvent,
  render,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from 'history';
import RegisterBrand from "./RegisterBrand";
import BrandService from "../../services/BrandService/BrandService";

const brandMock = {
    id: 1,
    name: "Volvo",
  };
const history = createMemoryHistory();
let pushSpy;

let testLocation;
const setup = (brandId) => {
  const path = brandId ? "/change-brand/:id" : "/list-brand";
  const entry = brandId ? `/change-brand/${brandId}` : "/list-brand";
  return render(
    <MemoryRouter initialEntries={["/list-brand", entry]} initialIndex={1}>
      <Route path={path}>
        <RegisterBrand />
      </Route>
      <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>
  );
};


const brandServiceRegisterSpy = jest.spyOn(BrandService, "cadastrar");
const brandServiceUpdateSpy = jest.spyOn(BrandService, "alterar");
const brandServiceGetSpy = jest.spyOn(BrandService, "consultar");
  afterEach(() => {
    jest.clearAllMocks();
  });

describe('<VehicleRegister />', () => {
    beforeEach(async () => {
      pushSpy = jest.spyOn(history, 'push');
      await act(async () => setup());
    });
  it('Should show error if brand is not provided', async () => {
    const inputVehicleModel = screen.getByRole('textbox', { name: /Marca/i });
    const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputVehicleModel, 'wo');
    userEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      /Marca precisa ter no mínimo 3 caracteres./i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it('Should redirect to "/marcas" when the user press "cadastrar" with valid data', async () => {
    const textBox = screen.getByRole('textbox', { name: /Marca/i });
    const createBtn = screen.getByRole('button', { name: /Cadastrar/i });
    userEvent.type(textBox, brandMock.name);
    userEvent.click(createBtn);
    await waitFor(() => expect(testLocation.pathname).toEqual('/list-brand'));
  });

  it('Should redirect to "/marcas" when the user press "cancelar" with valid data', async () => {
    const cancelBtn = screen.getByRole('button', { name: /cancelar/i });
    userEvent.click(cancelBtn);
    await waitFor(() => expect(testLocation.pathname).toEqual('/list-brand'));
  });

  it('should register the brand that is typed into the input', async () => {
    const input = screen.getByRole('textbox', { name: /Marca/i });

    userEvent.type(input, 'Volvo');
    userEvent.click(screen.getByRole('button', { name: /cadastrar/i }))

    expect(brandServiceRegisterSpy).toHaveBeenCalledWith({ name: 'Volvo' });
  });

});
