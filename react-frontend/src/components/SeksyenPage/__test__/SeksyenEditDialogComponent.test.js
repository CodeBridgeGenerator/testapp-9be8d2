import React from "react";
import { render, screen } from "@testing-library/react";

import SeksyenEditDialogComponent from "../SeksyenEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders seksyen edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SeksyenEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("seksyen-edit-dialog-component")).toBeInTheDocument();
});
