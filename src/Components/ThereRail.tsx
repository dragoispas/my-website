import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const THEMES = [
  { name: "Cyan", hue: 196 },
  { name: "Blue", hue: 220 },
  { name: "Violet", hue: 258 },
  { name: "Rose", hue: 330 },
  { name: "Emerald", hue: 160 },
];

export function ThemeRail() {
  const [themeIndex, setThemeIndex] = useLocalStorage("theme-index", 0);
  const activeTheme = THEMES[themeIndex] ?? THEMES[0];

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-hue",
      String(activeTheme.hue)
    );
  }, [activeTheme.hue]);

  return (
    <div className="theme-rail-wrap">
      <div className="theme-rail">
        <div className="theme-stop-wrap">
          {THEMES.map((theme, index) => {
            const active = index === themeIndex;

            return (
              <button
                key={theme.name}
                type="button"
                className={`theme-stop ${active ? "active" : ""}`}
                onClick={() => setThemeIndex(index)}
                title={theme.name}
                style={{ "--theme-hue": theme.hue } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}