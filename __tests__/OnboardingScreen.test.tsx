import OnboardingScreen from "@/app/onBoarding";
import { fireEvent, render } from "@testing-library/react-native";

describe("<OnboardingScreen />", () => {
  // mock navigation
  const mockReplace = jest.fn();
  const navigation = { replace: mockReplace };

  // 1. render test
  test("renders first slide correctly", () => {
    const { getByText } = render(<OnboardingScreen navigation={navigation} />);

    expect(getByText("Slide 1")).toBeTruthy();
  });

  // 2. button press -> next slide
  test("goes to next slide when button pressed", () => {
    const { getByTestId } = render(
      <OnboardingScreen navigation={navigation} />,
    );

    const button = getByTestId("next-button");
    const indexText = getByTestId("index");

    expect(indexText.props.children).toContain(0);

    fireEvent.press(button);

    expect(indexText.props.children).toContain(1);
  });

  // 3. last slide -> navigate
  test("navigates to Login on last slide", () => {
    const { getByTestId } = render(
      <OnboardingScreen navigation={navigation} />,
    );

    const button = getByTestId("next-button");

    // press button 3 times to go to last slide
    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);

    expect(mockReplace).toHaveBeenCalledWith("Login");
  });

  // 4. not crashing test
  test("does not crash", () => {
    expect(() =>
      render(<OnboardingScreen navigation={navigation} />),
    ).not.toThrow();
  });
});
