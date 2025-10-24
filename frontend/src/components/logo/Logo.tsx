import { FileText } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row space-x-1 items-center">
      <div
        className="flex items-center justify-center
  sm:justify-start
    "
      >
        <div
          className="
             rounded-lg flex items-center border-3 border-amber-200 dark:border-gray-200
             justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-1 to-90%
              "
        >
          <span className="font-bold text-gray-50">
            <FileText />
          </span>
        </div>
      </div>
      <p className="text-2xl font-bold text-blue-950">
        Odoo<span className="text-blue-600 text-sm">Clone</span>
      </p>
    </div>
  );
};

export default Logo;
