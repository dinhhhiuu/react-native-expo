import HomeScreen, { CustomText } from "@/app/index";
import { fireEvent, render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  // ✅ 1. Render test
  test("renders correctly", () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText("Welcome!")).toBeTruthy();
  });

  // ✅ 2. Button press test
  test("increments count when button pressed", () => {
    const { getByTestId } = render(<HomeScreen />);

    const button = getByTestId("increment-button");
    const countText = getByTestId("count");

    expect(countText.props.children).toContain(0);

    fireEvent.press(button);

    expect(countText.props.children).toContain(1);
  });

  // ✅ 3. Không crash
  test("does not crash when rendering", () => {
    expect(() => render(<HomeScreen />)).not.toThrow();
  });
});

describe("<CustomText />", () => {
  test("renders correctly", () => {
    const { getByText } = render(<CustomText>Some text</CustomText>);
    expect(getByText("Some text")).toBeTruthy();
  });
});
