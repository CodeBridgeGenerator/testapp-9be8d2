import React from "react";
import { render, screen } from "@testing-library/react";

import SeksyenPage from "../SeksyenPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders seksyen page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SeksyenPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("seksyen-datatable")).toBeInTheDocument();
    expect(screen.getByRole("seksyen-add-button")).toBeInTheDocument();
});
