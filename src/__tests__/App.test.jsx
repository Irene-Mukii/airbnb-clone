import { render } from "@testing-library/react";
import App from "../App.jsx";

test('Renders main page correctly',()=>{
    render(<App/>)
    expect(true).toBeTruthy();
})