import { Link } from "react-router-dom";
import logo from "@/assets/anel_branco.png";

const leftMenuItems = [
  { label: "On Line", path: "/online" },
  { label: "Dia Anterior", path: "/dia-anterior" },
  { label: "Mensal", path: "/" },
  { label: "PCP", path: "/pcp" },
  { label: "Experiência", path: "/experiencia" },
];

const rightMenuItems = [
  { label: "Home", path: "/home" },
  { label: "Voltar", path: "#", action: "back" },
  { label: "Sair", path: "#", action: "logout" },
];

export const TopMenu = () => {
  const handleAction = (action: string) => {
    if (action === "back") {
      window.history.back();
    } else if (action === "logout") {
      // Handle logout logic
      console.log("Logout clicked");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-8 bg-menu text-menu-foreground shadow-sm">
      <div className="h-full flex items-center justify-between px-4">
        {/* Left menu items */}
        <ul className="flex items-center gap-1 h-full text-xs font-medium">
          {leftMenuItems.map((item, index) => (
            <li key={index} className="h-full flex items-center">
              <Link
                to={item.path}
                className="h-full px-3 hover:bg-menu-hover transition-colors duration-150 flex items-center"
              >
                {item.label}
              </Link>
              {index < leftMenuItems.length - 1 && (
                <span className="text-menu-foreground/40">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right menu items */}
        <div className="flex items-center gap-3 h-full">
          <ul className="flex items-center gap-1 h-full text-xs font-medium">
            {rightMenuItems.map((item, index) => (
              <li key={index} className="h-full flex items-center">
                {item.action ? (
                  <button
                    onClick={() => handleAction(item.action)}
                    className="h-full px-3 hover:bg-menu-hover transition-colors duration-150 flex items-center"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="h-full px-3 hover:bg-menu-hover transition-colors duration-150 flex items-center"
                  >
                    {item.label}
                  </Link>
                )}
                {index < rightMenuItems.length - 1 && (
                  <span className="text-menu-foreground/40">|</span>
                )}
              </li>
            ))}
          </ul>
          <img src={logo} alt="Logo da empresa" className="h-6 w-auto" />
        </div>
      </div>
    </nav>
  );
};
