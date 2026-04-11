from pathlib import Path

from playwright.sync_api import sync_playwright


def main() -> None:
    tools_dir = Path(__file__).resolve().parent
    site_dir = tools_dir.parent
    project_dir = site_dir.parent
    input_html = (site_dir / "UI_Demo" / "UITesting_r2.html").resolve()
    out_dir = site_dir / "assets" / "screenshots" / "update-1"

    if not input_html.exists():
        raise FileNotFoundError(f"Demo HTML not found: {input_html}")
    out_dir.mkdir(parents=True, exist_ok=True)

    url = input_html.as_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(1400)

        def shot(name: str) -> None:
            page.wait_for_timeout(250)
            page.screenshot(path=str(out_dir / name), full_page=True)

        shot("update-1-flow-1-home.png")
        shot("update-1-main-progress.png")

        page.evaluate("(screen) => navigateTo(screen)", "diagnose")
        page.wait_for_timeout(900)
        shot("update-1-flow-2-diagnose-photo.png")

        page.evaluate("(tab) => switchDiagnoseTab(tab)", "chat")
        page.wait_for_timeout(700)
        shot("update-1-flow-3-diagnose-chat.png")

        page.evaluate("(screen) => navigateTo(screen)", "appliances")
        page.wait_for_timeout(900)
        page.evaluate("openApplianceModal()")
        page.wait_for_timeout(800)
        shot("update-1-flow-4-appliances-add.png")

        page.evaluate("(id) => closeModal(id)", "modal-appliance")
        page.wait_for_timeout(800)
        page.evaluate("(screen) => navigateTo(screen)", "schedule")
        page.wait_for_timeout(900)
        page.evaluate("openTaskModal()")
        page.wait_for_timeout(900)
        shot("update-1-flow-5-maintenance-add.png")

        page.evaluate("(id) => closeModal(id)", "modal-task")
        page.wait_for_timeout(800)
        page.evaluate("(screen) => navigateTo(screen)", "history")
        page.wait_for_timeout(900)
        shot("update-1-flow-6-history.png")

        browser.close()


if __name__ == "__main__":
    main()
