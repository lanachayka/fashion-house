import { render, screen } from "@testing-library/react";
import { HistoryInfoBlock } from "../../pages/HistoryPage/historyData";
import { HistoryBlock } from "./HistoryBlock";

const mockHistoryItem: HistoryInfoBlock = {
  year: "2022",
  title: "test",
  text: "test",
};
test("render without errors", () => {
  render(<HistoryBlock historyItem={mockHistoryItem} />);
  expect(screen.getByText("2022")).toBeInTheDocument();
});
