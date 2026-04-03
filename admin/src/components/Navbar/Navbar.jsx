import React, { useEffect, useRef, useState } from "react";
import { Home, List, User, Menu, X } from "lucide-react";
import { navbarStyles } from "../../assets/dummyStyles";
import { Show, SignInButton, UserButton, useUser, useAuth } from "@clerk/react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  logoSrc = null,
  siteName = "Binary Blitz",
  rightContent = null,
  onNavigate = null,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when resizing to md+ and lock body scroll when mobile open
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setMobileOpen(false);
    window.addEventListener("resize", onResize);
    const prevOverflow = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow || "";
    };
  }, [mobileOpen]);

  const handleNavigate = (href) => {
    setMobileOpen(false);
    if (onNavigate) return onNavigate(href);
    try {
      navigate(href);
    } catch {
      window.location.href = href;
    }
  };

  // Save Clerk token on sign-in transition (false -> true) and redirect only from sign-in pages
  const prevSignedInRef = useRef(isSignedIn);
  useEffect(() => {
    let mounted = true;
    async function saveTokenAndMaybeRedirect() {
      if (!isSignedIn || prevSignedInRef.current === isSignedIn) return;

      try {
        const token = await getToken();
        if (token && mounted) {
          localStorage.setItem("clerkToken", token);
          console.log("clerk token saved to localStorage");
        }
      } catch (err) {
        console.error("Failed to get Clerk token:", err);
      }

      const path = window.location.pathname;
      const shouldRedirect =
        path === "/" || path === "/login" || path === "/signin" || path === "";

      if (shouldRedirect) {
        if (onNavigate) onNavigate("/dashboard");
        else {
          try {
            navigate("/dashboard");
          } catch {
            window.location.href = "/dashboard";
          }
        }
      }

      prevSignedInRef.current = isSignedIn;
    }

    saveTokenAndMaybeRedirect();
    return () => {
      mounted = false;
    };
  }, [isSignedIn, getToken, navigate, onNavigate]);

  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}>
          <div className={navbarStyles.homeButton}>
            <button
              type="button"
              onClick={() => handleNavigate("/dashboard")}
              className={navbarStyles.homeButton}
            >
              <div className={navbarStyles.logoWrapper}>
                <img
                  src={
                    logoSrc ||
                    "logoquiz.png"
                  }
                  alt={`${siteName} logo`}
                  className={navbarStyles.logoImg}
                />
              </div>
              <div className={navbarStyles.siteNameWrapper}>
                <span className={navbarStyles.siteName}>{siteName}</span>
                <span className={navbarStyles.siteSubtitle}>
                  Blitz Your Logic
                </span>
              </div>
            </button>
          </div>

          <Show when="signed-in">
            <div className={navbarStyles.desktopCenterContainer}>
              <div className={navbarStyles.desktopCenterInner}>
                <button
                  onClick={() => handleNavigate("/dashboard")}
                  className={navbarStyles.dashboardButton}
                >
                  <Home className={navbarStyles.dashboardIcon} />
                  <span className={navbarStyles.dashboardText}>Dashboard</span>
                </button>

                <button
                  onClick={() => handleNavigate("/list")}
                  className={navbarStyles.listButton}
                >
                  <List className={navbarStyles.listIcon} />
                  <span className={navbarStyles.listText}>List Quiz</span>
                </button>
              </div>
            </div>
          </Show>

          <div className="flex items-center gap-3">
            <div className={navbarStyles.desktopRightContent}>
              {rightContent ? (
                rightContent
              ) : (
                <div className={navbarStyles.profileGroup}>
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <button
                        type="button"
                        className={navbarStyles.profileButton}
                      >
                        <User
                          className={navbarStyles.profileIcon}
                          aria-hidden
                        />
                        <span>My Profile</span>
                      </button>
                    </SignInButton>
                  </Show>

                  <Show when="signed-in">
                    <div className={navbarStyles.profileGroup}>
                      <div className={navbarStyles.profileBlur} />
                      <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
                    </div>
                  </Show>
                </div>
              )}
            </div>

            <div className={navbarStyles.mobileMenuContainer}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileOpen((s) => !s);
                }}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className={navbarStyles.hamburgerButton}
              >
                {mobileOpen ? (
                  <X className={navbarStyles.xIcon} aria-hidden />
                ) : (
                  <Menu className={navbarStyles.menuIcon} aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div
          id="mobile-menu"
          className={navbarStyles.mobileOverlay}
          aria-modal="true"
          role="dialog"
        >
          <div
            className={navbarStyles.mobileBackdrop}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <div
            className={navbarStyles.mobilePanel}
            onClick={(e) => e.stopPropagation()}
            role="menu"
          >
            <nav className={navbarStyles.mobileNav}>
              <Show when="signed-in">
                <button
                  onClick={() => handleNavigate("/dashboard")}
                  className={navbarStyles.mobileNavButton}
                >
                  <Home className={navbarStyles.mobileNavIcon} />
                  <div>
                    <div className={navbarStyles.mobileNavItemTitle}>
                      Dashboard
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavigate("/list")}
                  className={navbarStyles.mobileNavButton}
                >
                  <List className={navbarStyles.mobileNavIcon} />
                  <div>
                    <div className={navbarStyles.mobileNavItemTitle}>
                      List Quiz
                    </div>
                  </div>
                </button>
              </Show>

              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className={navbarStyles.mobileNavButton}>
                    <User className={navbarStyles.mobileNavIcon} />
                    <div>
                      <div className={navbarStyles.mobileNavItemTitle}>
                        Login
                      </div>
                    </div>
                  </button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <div className={navbarStyles.mobileNavButton}>
                  <UserButton  />
                </div>
              </Show>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
