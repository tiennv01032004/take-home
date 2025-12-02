import "@testing-library/jest-dom";
import React from "react";

// Mock next/image để render thành <img>
jest.mock(
  "next/image",
  () => (props: any) => React.createElement("img", props)
);
