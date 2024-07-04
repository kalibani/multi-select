import React from "react";
import MultiSelect from "./components/UI/select";
import { Option } from "./types/Option";

const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon 2" },
  { value: "3", label: "Option with number 3" },
  { value: "4", label: "Option long long long option 4" },
  // Add more options as needed
];

const App: React.FC = () => {
  const handleMultiSelectChange = (selected: Option | Option[]) => {
    console.log("Selected:", selected);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Multi Select Component</h1>
      <MultiSelect
        options={options}
        onChange={handleMultiSelectChange}
        isMultiple={true}
        searchable={true}
        portal={true}
        zIndex={1000}
      />
    </div>
  );
};

export default App;
