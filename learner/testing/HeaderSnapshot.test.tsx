import { render, screen } from "@testing-library/react";
import HeaderSnapshot from "@/components/HeaderSnapshot"; // alias @ trỏ root
import { Learner } from "@/types/learner";
import { learner } from "@/data/user.json";

describe("HeaderSnapshot Component", () => {
  it("renders learner name and tagline", () => {
    render(<HeaderSnapshot learner={learner} />);

    expect(
      screen.getByText(new RegExp(`Hi, ${learner.name}`, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(learner.tagline)).toBeInTheDocument();
  });

  it("renders all StatCard values correctly", () => {
    render(<HeaderSnapshot learner={learner} />);

    expect(screen.getByText("Simulations Started")).toBeInTheDocument();
    expect(
      screen.getByText(learner.simsStarted.toString())
    ).toBeInTheDocument();

    expect(screen.getByText("Simulations Completed")).toBeInTheDocument();
    expect(
      screen.getByText(learner.simsCompleted.toString())
    ).toBeInTheDocument();

    expect(screen.getByText("Average Score")).toBeInTheDocument();
    expect(screen.getByText(`${learner.avgScore}%`)).toBeInTheDocument();

    expect(screen.getByText("Current Streak")).toBeInTheDocument();
    expect(screen.getByText(`${learner.streak} days`)).toBeInTheDocument();

    expect(screen.getByText("Career Activation Rate")).toBeInTheDocument();
    expect(
      screen.getByText(`${learner.careerActivationRate}%`)
    ).toBeInTheDocument();
  });

  it("renders learner avatar image", () => {
    render(<HeaderSnapshot learner={learner} />);
    const avatar = screen.getByAltText("avatar") as HTMLImageElement;
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain(learner.avatar);
  });
});
