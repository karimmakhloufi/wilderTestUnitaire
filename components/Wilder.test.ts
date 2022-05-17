import Wilder from "./Wilder";
import { screen, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

test("wilder", () => {
  render(
    <MockedProvider >
      <Wilder
        _id="1"
        name="Johnny"
        city="Paris"
        skills={[{ title: "Javascript", votes: 19 }]}
        setTrigger={() => {}}
      />
    </MockedProvider>
  );
  expect(screen.queryByText(/Lorem/i)).toBeInTheDocument();
});
