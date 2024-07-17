import { loginInputType } from "../utils/interface";
import { FiSearch } from "react-icons/fi";

const Search = ({ value, handleChange, placeholder }: loginInputType) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <FiSearch />
    </div>
  );
};

export default Search;
