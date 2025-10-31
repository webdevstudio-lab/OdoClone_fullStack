import { useState, useEffect } from "react";
import { Briefcase, LogOut, Menu, Navigation, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "./Logo";
import { NAVIGATION_MENU } from "../utils/data";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { logout } from "../utils/apiPaths";
import queryClient from "../config/queryClient";
// import ProfileDropdown from "../components/ProfileDropdown";

const NavigationItem = ({ item, isActive, onClick, isCollapsed }) => {
  const Icon = item.icon;
  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200  ${
        isActive
          ? "bg-indigo-50 text-ingo-900 shadow-sm shadow-indigo-50"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 "
      }`}
    >
      <Icon
        className={`w-6 h-6 ${isActive ? "text-blue-900" : "text-slate-500"}`}
      />
      {!isCollapsed && <span className="ml-3 truncate">{item.name}</span>}
    </button>
  );
};

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(activeMenu || "dashboard");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { mutate: logoutMutation, isPending: loading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      toast.success("Vous avez bien vous deconnecter");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      if (error.message === "Network Error") {
        toast.error("Impossible de se connecter au serveur!");
      } else {
        toast.error(error.message);
      }
    },
  });

  //handle resposive behevior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropdownOpen]);

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    navigate(`/${itemId}`);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toogleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarCollapsed = !isMobile && false;

  const handleLogout = (e) => {
    e.preventDefault();
    logoutMutation();
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* sideBar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform
      ${
        isMobile
          ? sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
          : "translate-x-0"
      } ${sidebarCollapsed ? "w-16" : "w-64"} 
       bg-white border-r border-slate-200`}
      >
        {/* Logo */}
        <div className="flex items-center h-16 border-b border-slate-200 px-6">
          <Link
            className="flex items-center space-x-3 cursor-pointer"
            to="/dashboard"
          >
            <div className="py-4 flex items-center justify-center gap-3">
              <Logo />
              <p className="font-bold text-slate-900/90 text-2xl">OdooClone</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {NAVIGATION_MENU.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isActive={activeNavItem === item.id}
              onClick={() => {
                handleNavigation;
              }}
              isCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>

        {/* logout */}

        <div className="absolute bottom-4 left-4 right-4">
          <button
            className=" w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 
          hover:text-slate-900 transtion-all duration-300"
            onClick={handleLogout}
          >
            <LogOut size={20} className="h-5 w-5 shrink-0 text-slate-500" />
            {!sidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-25 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-64"
        } `}
      >
        {/* Top bar nav */}
        <header
          className="bg-white/80 backdrop-blur-sm border-b border-slate-200 
        h-16 flex items-center justify-between px-6 sticky top-0 z-30"
        >
          <div className="flex items-center space-x-4">
            {isMobile && (
              <button
                className="p-2 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                onClick={toogleSidebar}
              >
                {sidebarOpen ? (
                  <X size={20} className="h-5 w-5 text-slate-600" />
                ) : (
                  <Menu size={20} className="h-5 w-5 text-slate-600" />
                )}
              </button>
            )}
            <div>
              <h1 className="textbase font-semibold text-slate-900">
                {" "}
                Welcome Back
              </h1>
              <p className="text-sm text-slate-500 hidden sm:block">
                {user.data.user.user.name}
              </p>
            </div>
          </div>

          <div className=" flex items-center space-x-3">
            {/* Profile dropdown */}
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
