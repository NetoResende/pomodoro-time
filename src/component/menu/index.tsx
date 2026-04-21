import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type IsTypeTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<IsTypeTheme>(() => {
    // função de laize initializated
    const localStorageTheme =
      (localStorage.getItem("theme") as IsTypeTheme) || "dark";
    return localStorageTheme;
  });
  const nextThemeIcons = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  function hendlerTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((state) => {
      const nextTheme = state === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("dataTheme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={`${styles.menu} ${styles.texto}`}>
      <a
        href="##"
        className={styles.menuLink}
        area-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        href="##"
        className={styles.menuLink}
        area-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="##"
        className={styles.menuLink}
        area-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="##"
        className={styles.menuLink}
        area-label="Mudar Tema"
        title="Mudar Tema"
        onClick={hendlerTheme}
      >
        {nextThemeIcons[theme]}
      </a>
    </nav>
  );
}