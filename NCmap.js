// NCmap.js – Routing mit 6D-Achsen
const NCmap = {
    routes: {},

    addRoute(module, target) {
        this.routes[module] = target;
        console.log("🧩 NC‑Hub‑All: Route hinzugefügt:", module, "→", target);
    },

    // 6D‑Routing
    route6D(achse) {
        const map = {
            "Höhe": "SCALE",
            "Breite": "POOL",
            "Tiefe": "NET",
            "Mystery-Höhe": "AXO",
            "Mystery-Breite": "DR",
            "Mystery-Tiefe": "ID"
        };
        return map[achse] || null;
    },

    // Vollständiges Routing
    init() {
        this.addRoute("POT.P", "Primär");
        this.addRoute("POT.O", "Ordert");
        this.addRoute("POT.T", "Tele-Matrix");
        this.addRoute("DA", "Erfassung");
        this.addRoute("NE", "Neutralisierung");
        this.addRoute("BEN", "Bewertung");
        console.log("🧩 NC‑Hub‑All: Routing initialisiert.");
        return this;
    }
};

// ─── INIT ──────────────────────────────────
NCmap.init();
