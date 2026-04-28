export function MainArticule() {
    return (
        <article className="rounded-3xl p-8 shadow-2xl">
            <p className="text-xs tracking-[0.24em] text-cyan-200/90 uppercase">About me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Building products with clean code and sharp UI</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
                Soy desarrollador enfocado en frontend con React + TypeScript y backend con Django,
                creando experiencias robustas para portfolios, dashboards y productos reales.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-100 sm:grid-cols-2">
                <li className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">React + TypeScript</li>
                <li className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">Django + DRF</li>
                <li className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">UI/UX orientado al detalle</li>
                <li className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">Arquitectura modular</li>
            </ul>
        </article>
    )
}