// NCregister.js – Erweitert mit POT + 6D
const NCregister = {
    modules: {},

    add(name, data) {
        this.modules[name] = data;
        console.log("🧩 NC‑Hub‑All: Modul registriert:", name);
    },

    // POT‑Module
    addPOT() {
        this.add("POT.P", { typ: "Primär", status: "frei" });
        this.add("POT.O", { typ: "Ordert", code: "js" });
        this.add("POT.T", { typ: "Tele-Matrix", modus: "all4all" });
    },

    // 6D‑Achsen
    add6D() {
        this.add("6D.Höhe", { typ: "bekannt", symbol: "▲" });
        this.add("6D.Breite", { typ: "bekannt", symbol: "◀▶" });
        this.add("6D.Tiefe", { typ: "bekannt", symbol: "▼" });
        this.add("6D.Mystery-Höhe", { typ: "verborgen", symbol: "⬆" });
        this.add("6D.Mystery-Breite", { typ: "verborgen", symbol: "⬌" });
        this.add("6D.Mystery-Tiefe", { typ: "verborgen", symbol: "⬇" });
    },

    // DA・NE・BEN
    addDANEBEN() {
        this.add("DA", { typ: "Erfassung", status: "offen" });
        this.add("NE", { typ: "Neutralisierung", status: "klar" });
        this.add("BEN", { typ: "Bewertung", status: "balanciert" });
    },

    // Vollständige Initialisierung
    init() {
        this.addPOT();
        this.add6D();
        this.addDANEBEN();
        console.log("🧩 NC‑Hub‑All: Alle Module initialisiert.");
        return this;
    }
};

// ─── INIT ──────────────────────────────────
NCregister.init();
