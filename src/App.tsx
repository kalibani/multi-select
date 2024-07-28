import { FC } from "react";

import { Select, Option } from "makyo-multi-select";

import "makyo-multi-select/dist/style.css";

const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon 2" },
  { value: "3", label: "Option with number 3" },
  { value: "4", label: "long long long long option 4" },
  { value: "5", label: "long long long long long option 5" },
  { value: "6", label: "long long long long long long option 6" },
  // Add more options as needed
];

const customOptions: Option = [
  { value: "Abe", label: "Abe", customAbbreviation: "A" },
  { value: "John", label: "John", customAbbreviation: "J" },
  { value: "Dustin", label: "Dustin", customAbbreviation: "D" },
];

const customRenderOption = ({ label, customAbbreviation }: Option) => (
  <div
    style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
  >
    <div>{label}</div>
    <div style={{ marginLeft: "10px", color: "#ccc" }}>
      {customAbbreviation}
    </div>
  </div>
);

const App: FC = () => {
  const handleMultiSelectChange = (selected: Option | Option[]) => {
    console.log("Selected:", selected);
  };

  return (
    <>
      <div className="p-4 max-w-screen-xl">
        <h1 className="text-2xl mb-4">Select Component</h1>
        <Select
          options={options}
          onChange={handleMultiSelectChange}
          multiple={true}
          withSearch={true}
          portal={false}
          zIndex={1000}
          outlined={false}
        />
      </div>

      <div className="p-4 max-w-screen-xl">
        <h1 className="text-2xl mb-4">Custom Option Rendering</h1>
        <Select
          options={customOptions}
          onChange={handleMultiSelectChange}
          multiple={true}
          withSearch={true}
          portal={false}
          zIndex={1000}
          outlined={false}
          customRenderOption={customRenderOption}
        />
      </div>
    </>
  );
};

export default App;
