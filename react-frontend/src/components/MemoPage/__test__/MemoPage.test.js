import React from "react";
import { render, screen } from "@testing-library/react";

import MemoPage from "../MemoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders memo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MemoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("memo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("memo-add-button")).toBeInTheDocument();
});
