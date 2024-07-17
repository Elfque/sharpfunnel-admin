import { loginInputType } from "../../utils/interface";

const LoginInput = ({
  type,
  value,
  handleChange,
  name,
  placeholder,
}: loginInputType) => {
  return (
    <div>
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        className="border border-inputBorder text-inputBorder w-full px-4 py-3 rounded-lg text-xs bg-transparent"
      />
    </div>
  );
};

export default LoginInput;
