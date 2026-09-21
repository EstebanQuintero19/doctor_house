import Image from "next/image";
import Music from "./Music";

const cast = [
  { id: "house", name: "Gregory House", role: "Jefe de Diagnóstico", field: "Nefrología, enf. infecciosas", since: "T1 – T8", note: "Cojera, Vicodin, genio. Todo lo demás es ruido." },
  { id: "wilson", name: "James Wilson", role: "Jefe de Oncología", field: "Oncología", since: "T1 – T8", note: "Único amigo. Exceso de empatía, incurable." },
  { id: "cuddy", name: "Lisa Cuddy", role: "Directora médica", field: "Endocrinología", since: "T1 – T7", note: "Firma mis autorizaciones. A veces." },
  { id: "foreman", name: "Eric Foreman", role: "Equipo de diagnóstico", field: "Neurología", since: "T1 – T8", note: "Se parece demasiado a mí. Lo odia." },
  { id: "chase", name: "Robert Chase", role: "Equipo de diagnóstico", field: "Cuidados intensivos, cirugía", since: "T1 – T8", note: "Hace lo que le dicen. Hasta que no." },
  { id: "cameron", name: "Allison Cameron", role: "Equipo de diagnóstico", field: "Inmunología", since: "T1 – T6", note: "Cree que la gente es buena. Síntoma preocupante." },
  { id: "thirteen", name: "Remy “Trece” Hadley", role: "Equipo de diagnóstico", field: "Medicina interna", since: "T4 – T8", note: "Huntington. Prefiere no hablar de ello." },
  { id: "taub", name: "Chris Taub", role: "Equipo de diagnóstico", field: "Cirugía plástica", since: "T4 – T8", note: "Ex cirujano plástico. El resto ya lo adivinas." },
  { id: "kutner", name: "Lawrence Kutner", role: "Equipo de diagnóstico", field: "Medicina deportiva", since: "T4 – T5", note: "Entusiasmo. Nadie lo vio venir." },
] as const;

const moments = [
  { ep: "1×21", year: "2005", title: "Three Stories", text: "House da una clase con tres pacientes que llegan con dolor en la pierna. Uno de ellos es él. Así aprendemos de dónde vienen el bastón y el Vicodin." },
  { ep: "2×24", year: "2006", title: "No Reason", text: "El marido de una antigua paciente entra en su despacho y le dispara. Todo lo que ocurre después quizá no esté ocurriendo." },
  { ep: "3×05–11", year: "2006", title: "El caso Tritter", text: "Una consulta rutinaria acaba en una investigación policial por el Vicodin. Wilson y el equipo tienen que elegir bando." },
  { ep: "4×15–16", year: "2008", title: "House’s Head / Wilson’s Heart", text: "Un autobús, una conmoción y un recuerdo que no consigue recuperar. Cuando por fin lo hace, ya es tarde para Amber." },
  { ep: "5×20", year: "2009", title: "Simple Explanation", text: "Kutner no aparece a trabajar. El equipo busca un motivo durante todo el episodio. No lo hay." },
  { ep: "5×24", year: "2009", title: "Both Sides Now", text: "Amber no se fue. House deja el hospital para ingresar en Mayfield." },
  { ep: "6×01–02", year: "2009", title: "Broken", text: "Dos horas fuera de Princeton-Plainsboro, sin Vicodin y sin ningún caso que resolver. Solo él." },
  { ep: "7×23", year: "2011", title: "Moving On", text: "Cuddy pasa página. House atraviesa el salón de su casa con el coche." },
  { ep: "8×22", year: "2012", title: "Everybody Dies", text: "Un edificio en llamas, un funeral, dos motos y cinco meses por delante para House y Wilson." },
];

const quotes = [
  { q: "Si hablas con Dios, eres religioso. Si Dios habla contigo, eres psicótico.", who: "House a un paciente (2×19)" },
  { q: "Nunca es lupus.", who: "House, hasta que lo fue (4×08)" },
  { q: "La humanidad está sobrevalorada.", who: "House a Wilson" },
  { q: "¿Prefiere un médico que le coja la mano mientras muere o uno que le ignore mientras mejora?", who: "House a un paciente" },
  { q: "Los pacientes quieren pruebas. Nosotros no vendemos pruebas, vendemos diagnósticos.", who: "House al equipo" },
  { q: "Los ojos pueden engañar, una sonrisa puede mentir, pero los zapatos siempre dicen la verdad.", who: "House a Wilson" },
  { q: "La gente no cambia.", who: "House, cada vez que alguien lo intenta" },
  { q: "Idiopático: del latín, somos idiotas porque no sabemos qué lo causa.", who: "House al equipo" },
  { q: "¿Me comparas con Dios? Halagador, pero que sepas que yo nunca he hecho un árbol.", who: "House a un paciente" },
  { q: "Corro riesgos. A veces los pacientes mueren. Pero no correrlos hace que mueran más.", who: "House a Cuddy" },
  { q: "Curar enfermedades es la razón por la que nos hicimos médicos. Tratar a los pacientes es lo que hace desgraciados a la mayoría.", who: "House al equipo" },
];

export default function Page() {
  const [house, ...team] = cast;
  return (
    <>
      <Music src="/So much to say - Huddy - nomeutentelibero.mp3" title="So Much to Say" />
      <header className="banner">
        <div className="wrap">
          <nav className="nav" aria-label="Secciones">
            <a href="#personajes">Personajes</a>
            <a href="#momentos">Momentos</a>
            <a href="#frases">Frases</a>
          </nav>
          <h1 className="marker">Doctor House</h1>
          <p className="banner-sub">La serie, su equipo y sus momentos, escritos en la pizarra de diagnóstico.</p>
        </div>
      </header>

      <section className="hero wrap" aria-labelledby="titulo">
        <div className="board">
          <p className="board-corner marker">
            Princeton-Plainsboro
            <small>Depto. de Diagnóstico</small>
          </p>
          <div className="write">
            <h2 id="titulo" className="board-title marker">
              <span>Paciente: Gregory House</span>
              Diagnóstico diferencial
            </h2>
            <ul className="dx marker">
              <li>Cojera, pierna derecha</li>
              <li>
                Vicodin, <span className="strike">2 al día</span>
                <span className="fix">6 al día</span>
              </li>
              <li>Sarcasmo agudo, crónico</li>
              <li>Alergia a la clínica ambulatoria</li>
              <li>Genio. Confirmado.</li>
            </ul>
          </div>
          <p className="verdict marker">
            <span>Dx:</span>
            Todo el mundo miente.
          </p>
        </div>
        <div className="tray" aria-hidden="true"><i /><i /><i /><i /></div>

        <div className="intro">
          <p>
            Ocho temporadas siguiendo a un médico que odia a los pacientes y adora los rompecabezas. Cada semana un caso imposible, una pizarra llena de síntomas tachados y un diagnóstico que casi siempre llega en el último acto, y casi nunca es lupus.
          </p>
          <div className="facts">
            <div><b>8</b><span>temporadas</span></div>
            <div><b>177</b><span>episodios</span></div>
            <div><b>2004–12</b><span>años de emisión</span></div>
          </div>
        </div>
      </section>

      <section id="personajes" className="section wrap" aria-labelledby="h-personajes">
        <div className="section-head">
          <h2 id="h-personajes" className="marker">Historias clínicas</h2>
          <p>El equipo de Princeton-Plainsboro, con la anotación que House dejaría en su expediente.</p>
        </div>
        <div className="charts">
          <Chart c={house} lead />
          {team.map((c) => <Chart key={c.id} c={c} />)}
        </div>
      </section>

      <section id="momentos" className="section moments" aria-labelledby="h-momentos">
        <div className="wrap">
          <div className="section-head">
            <h2 id="h-momentos" className="marker">Momentos que cambiaron el caso</h2>
            <p>Nueve episodios en orden. Después de cada uno, la serie ya no es la misma.</p>
          </div>
          <ol className="timeline">
            {moments.map((m) => (
              <li key={m.title} className="moment">
                <div className="ep">{m.ep}<small>{m.year}</small></div>
                <div>
                  <h3 className="marker">{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="frases" className="section wrap" aria-labelledby="h-frases">
        <div className="section-head">
          <h2 id="h-frases" className="marker">Lo que dejó escrito</h2>
        </div>
        <ul className="quotes">
          {quotes.map((x) => (
            <li key={x.q} className="quote marker">
              <span>{x.q}</span>
              <cite>{x.who}</cite>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing wrap" aria-label="Cierre">
        <p className="board board-small marker">Caso cerrado.</p>
        <div className="tray" aria-hidden="true"><i /></div>
      </section>

    </>
  );
}

function Chart({ c, lead = false }: { c: (typeof cast)[number]; lead?: boolean }) {
  return (
    <article className={lead ? "chart lead" : "chart"}>
      <div className="photo">
        <Image src={`/personajes/${c.id}.jpg`} alt={c.name} width={480} height={600} sizes={lead ? "(max-width: 600px) 100vw, 400px" : "(max-width: 600px) 100vw, 320px"} priority={lead} />
      </div>
      <div>
        <h3>{c.name}</h3>
        <dl>
          <div><dt>Cargo</dt><dd>{c.role}</dd></div>
          <div><dt>Especialidad</dt><dd>{c.field}</dd></div>
          <div><dt>Temporadas</dt><dd>{c.since}</dd></div>
        </dl>
        <p className="note marker">{c.note}</p>
      </div>
    </article>
  );
}
