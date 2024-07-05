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
  { value: "7", label: "long long long long long long option 7" },
];

const App: FC = () => {
  const handleMultiSelectChange = (selected: Option | Option[]) => {
    console.log("Selected:", selected);
  };

  return (
    <div className="p-4 max-w-screen-xl">
      <h1 className="text-2xl mb-4">Select Component</h1>
      <Select
        options={options}
        onChange={handleMultiSelectChange}
        multiple={true}
        withSearch={true}
        portal={true}
        zIndex={1000}
        outlined={false}
      />
    </div>
  );
};

export default App;
