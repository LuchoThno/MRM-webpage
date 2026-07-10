"use client";

import Image from "next/image";

// NOTE: Este componente imita la plantilla HTML provista usando CSS global en app/globals.css.

import Link from "next/link";
import { useState } from "react";

export function MagallanesLanding() {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <>
      <div className="depth-lines" />

      <header className="mrm-header">
        <div className="mrm-nav">
          <div className="mrm-brand">
            <div className="mrm-brand-mark" />
            <div className="mrm-brand-text">
              <b>MAGALLANES ROV</b>
              <span>MARINE ROBOTICS</span>
            </div>
          </div>

          <nav className="mrm-nav-links" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#operacion">Operación</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <Link href="#contacto" className="mrm-nav-cta">
            Solicitar faena
          </Link>
        </div>
      </header>

      <main className="mrm-main">
        <section className="mrm-hero" id="inicio">
          <div>
            <div className="mrm-eyebrow">
              <span className="mrm-eyebrow-dot" />
              Base operativa — Punta Arenas, Chile
            </div>

            <h1>
              Ojos y manos <em>bajo el agua</em> del extremo sur
            </h1>

            <p className="mrm-lead">
              Inspección, mantención y levantamiento submarino con vehículos operados a distancia (ROV),
              diseñados para operar en las aguas frías y correntosas del Estrecho de Magallanes y los fiordos
              patagónicos.
            </p>

            <div className="mrm-hero-actions">
              <Link href="#contacto" className="mrm-btn-primary">
                Cotizar faena
              </Link>
              <a href="#servicios" className="mrm-btn-ghost">
                Ver capacidades →
              </a>
            </div>
          </div>

          <div className="mrm-hud" aria-label="Panel de telemetría">
            <div className="mrm-hud-row">
              <span className="mrm-hud-label">Posición</span>
<span className="mrm-hud-value mrm-mono">53°09&apos;S 70°55&apos;W</span>
            </div>
            <div className="mrm-hud-row">
              <span className="mrm-hud-label">Profundidad operativa</span>
              <span className="mrm-hud-value mrm-hud-value-signal">0 – 300 m</span>
            </div>
            <div className="mrm-hud-row">
              <span className="mrm-hud-label">Temp. agua promedio</span>
              <span className="mrm-hud-value mrm-mono">6.2 °C</span>
            </div>
            <div className="mrm-hud-row">
              <span className="mrm-hud-label">Corriente máx. tolerada</span>
              <span className="mrm-hud-value mrm-mono">2.5 nudos</span>
            </div>
            <div className="mrm-hud-row">
              <span className="mrm-hud-label">Estado flota</span>
              <span className="mrm-hud-value mrm-hud-value-signal">Operativa</span>
            </div>
            <div className="mrm-hud-graph">
              <svg viewBox="0 0 300 54" preserveAspectRatio="none">
                <polyline
                  points="0,10 20,14 40,11 60,22 80,18 100,30 120,26 140,36 160,32 180,40 200,34 220,42 240,38 260,44 280,40 300,46"
                  fill="none"
                  stroke="#5c7a91"
                  strokeWidth="1.4"
                />
                <polyline
                  points="0,10 20,14 40,11 60,22 80,18 100,30 120,26 140,36 160,32 180,40 200,34 220,42 240,38 260,44 280,40 300,46"
                  fill="none"
                  stroke="#ff6a1f"
                  strokeWidth="1.4"
                  strokeDasharray="4 250"
                  strokeDashoffset="0"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-254" dur="3.2s" repeatCount="indefinite" />
                </polyline>
              </svg>
            </div>
          </div>
        </section>

        <div className="mrm-strip" aria-hidden="true">
          <div className="mrm-strip-track">
            <span>Inspección de casco</span>
            <span>Acuicultura y balsas jaula</span>
            <span>Obras portuarias</span>
            <span>Levantamiento batimétrico</span>
            <span>Búsqueda y rescate</span>
            <span>Investigación científica</span>
            <span>Inspección de casco</span>
            <span>Acuicultura y balsas jaula</span>
            <span>Obras portuarias</span>
            <span>Levantamiento batimétrico</span>
            <span>Búsqueda y rescate</span>
            <span>Investigación científica</span>
          </div>
        </div>

        <section className="mrm-services" id="servicios">
          <div className="mrm-wrap">
            <div className="mrm-section-head">
              <div>
                <span className="mrm-section-tag">Capacidades</span>
                <h2>Cuatro formas de trabajar bajo el agua sin mandar un buzo</h2>
              </div>
              <p>
                Cada faena se planifica según profundidad, corriente y visibilidad del sitio — no todas las aguas
                del sur se navegan igual.
              </p>
            </div>

            <div className="mrm-service-grid">
              <div className="mrm-service-card">
                <span className="mrm-service-num mrm-mono">01</span>
                <h3>Inspección portuaria y de casco</h3>
                <p>
                  Revisión de muelles, pilotes, líneas de fondeo y cascos de naves sin detener la operación ni
                  exponer buzos a aguas de baja visibilidad.
                </p>
                <div className="mrm-service-depth">Rango típico · 5–80 m</div>
              </div>
              <div className="mrm-service-card">
                <span className="mrm-service-num mrm-mono">02</span>
                <h3>Acuicultura y balsas jaula</h3>
                <p>
                  Monitoreo de redes, líneas de fondeo y mortalidad en centros de cultivo, con reportes en video
                  georreferenciado para cada jaula inspeccionada.
                </p>
                <div className="mrm-service-depth">Rango típico · 10–40 m</div>
              </div>
              <div className="mrm-service-card">
                <span className="mrm-service-num mrm-mono">03</span>
                <h3>Levantamiento y batimetría</h3>
                <p>
                  Mapeo de fondo marino y estructuras sumergidas para proyectos de ingeniería, con datos exportables
                  a los formatos que use tu equipo técnico.
                </p>
                <div className="mrm-service-depth">Rango típico · 0–200 m</div>
              </div>
              <div className="mrm-service-card">
                <span className="mrm-service-num mrm-mono">04</span>
                <h3>Búsqueda, rescate e investigación</h3>
                <p>
                  Apoyo a operaciones de búsqueda submarina y a campañas científicas en fiordos y canales, con
                  tripulación certificada para condiciones subantárticas.
                </p>
                <div className="mrm-service-depth">Rango típico · hasta 300 m</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mrm-about" id="operacion">
          <div className="mrm-wrap mrm-about-grid">
            <div className="mrm-coord-block">
              <div className="mrm-lat mrm-mono">53.1638° S, 70.9171° W</div>
              <h3>Por qué operar desde Magallanes</h3>
              <p>
                El Estrecho de Magallanes y los canales patagónicos son uno de los entornos submarinos más exigentes
                del planeta: corrientes fuertes, agua fría todo el año y ventanas de buen tiempo breves. Diseñamos
                cada faena para esas condiciones, no al revés.
              </p>
              <div className="mrm-stat-row">
                <div className="mrm-stat">
                  <b>300 m</b>
                  <span>Profundidad máx.</span>
                </div>
                <div className="mrm-stat">
                  <b>6°C</b>
                  <span>Temp. promedio</span>
                </div>
                <div className="mrm-stat">
                  <b>24/7</b>
                  <span>Disponibilidad</span>
                </div>
              </div>
            </div>

            <div className="mrm-about-copy">
              <p>
                Somos un equipo de robótica submarina con base en Punta Arenas, formado para operar donde enviar
                un buzo es lento, caro o directamente imprudente.
              </p>
              <p>
                Nuestros ROV llevan cámara de alta definición, sonar y brazo manipulador, y transmiten imagen en
                tiempo real a la superficie, para que la decisión se tome mirando el fondo marino, no
                adivinándolo.
              </p>
              <p>
                Trabajamos con terminales portuarios, centros de cultivo, empresas de ingeniería marítima y equipos
                de investigación que necesitan datos submarinos confiables en el extremo sur de Chile.
              </p>
<div className="mrm-motto">
                <span className="mrm-motto-quote">“</span><b>Mare extremum, oculi nostri.</b> <span className="mrm-motto-quote">”</span> — El mar extremo, nuestros ojos.

              

              </div>
            </div>
          </div>
        </section>

        <section className="mrm-contact" id="contacto">
          <div className="mrm-wrap mrm-contact-inner">
            <div>
              <span className="mrm-section-tag">Contacto</span>
              <h2>Hablemos de tu faena submarina</h2>
              <p className="mrm-lead">
                Cuéntanos el sitio, la profundidad estimada y la ventana de tiempo que manejas. Respondemos con una
                propuesta técnica en menos de 48 horas.
              </p>
              <div className="mrm-contact-detail">
                <div>
                  <span className="mrm-contact-k">Base</span>
                  <span className="mrm-contact-v">Punta Arenas, Región de Magallanes, Chile</span>
                </div>
                <div>
                  <span className="mrm-contact-k">Correo</span>
                  <span className="mrm-contact-v">operaciones@magallanesrov.cl</span>
                </div>
                <div>
                  <span className="mrm-contact-k">Teléfono</span>
                  <span className="mrm-contact-v">+56 9 xxxx xxxx</span>
                </div>
                <div>
                  <span className="mrm-contact-k">Cobertura</span>
                  <span className="mrm-contact-v">Estrecho de Magallanes, canales y fiordos patagónicos</span>
                </div>
              </div>
            </div>

            <form
              className="mrm-form"
              onSubmit={(e) => {
                e.preventDefault();
                setToast("Solicitud enviada ✓");
                window.setTimeout(() => setToast(null), 2500);
              }}
            >
              <div className="mrm-field">
                <label htmlFor="nombre">Nombre / Empresa</label>
                <input id="nombre" type="text" placeholder="Ej. Terminal Talcahuano Portuario" required />
              </div>
              <div className="mrm-field">
                <label htmlFor="tipo">Tipo de faena</label>
                <select id="tipo" defaultValue="">
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option>Inspección portuaria o de casco</option>
                  <option>Acuicultura / balsas jaula</option>
                  <option>Levantamiento y batimetría</option>
                  <option>Búsqueda, rescate o investigación</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="mrm-field">
                <label htmlFor="mensaje">Detalle del sitio y profundidad estimada</label>
                <textarea id="mensaje" placeholder="Ubicación, profundidad aproximada, fecha deseada..." />
              </div>
              <button className="mrm-submit-btn" type="submit">
                {toast ?? "Enviar solicitud"}
              </button>
            </form>
          </div>
        </section>

        <footer className="mrm-footer">
          <span>© 2026 Magallanes ROV Marine — Punta Arenas, Chile</span>
          <div className="mrm-footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#operacion">Operación</a>
            <a href="#contacto">Contacto</a>
          </div>
        </footer>
      </main>
    </>
  );
}

