import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

test("render nothing when isShowing=false", () => {
  const modal = render(
    <Modal isShowing={false} hide={() => {}}>
      <h1>Modal Test</h1>
    </Modal>
    );
    expect(modal.container).toBeEmptyDOMElement();
});

test("render modal window when isShowing=true", () => {
  render(
    <Modal isShowing={true} hide={() => {}}>
      <h1>Modal Test</h1>
    </Modal>
  );
  expect(screen.getByText("Modal Test")).toBeInTheDocument();
});
