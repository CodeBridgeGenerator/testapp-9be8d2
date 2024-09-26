import React from "react";
import { render, screen } from "@testing-library/react";

import SeksyenCreateDialogComponent from "../SeksyenCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders seksyen create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SeksyenCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("seksyen-create-dialog-component")).toBeInTheDocument();
});
