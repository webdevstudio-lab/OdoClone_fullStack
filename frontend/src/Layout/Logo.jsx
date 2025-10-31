import { Fingerprint } from "lucide-react";

const Logo = () => {
  return (
    <>
      <div className="w-12 h-12 bg-linear-to-t from-indigo-500 to to-indigo-700 rounded-full flex items-center justify-center">
        <Fingerprint className="text-white" size={30} />{" "}
      </div>
    </>
  );
};

export default Logo;
