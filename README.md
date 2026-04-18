# En un Mundo Alterno
### Un Álbum para el Cambio de Creencias y Disfrutar la Experiencia de Vivir

🌐 **Sitio Web:** [jlomeli71.github.io/mundo_alterno](https://jlomeli71.github.io/mundo_alterno)

---

## Sobre el Proyecto

**En un Mundo Alterno** es un álbum musical con mensaje transformador, positivo y potencializador. Cada canción está inspirada en temas icónicos de la música universal, reescrita para reprogramar nuevas creencias a través de la escucha repetida.

La inspiración central: existen mundos paralelos con otras posibilidades, y a través de la música podemos acceder a ellos.

---

## Estructura del Repositorio

```
mundo_alterno/
├── index.html                  # Sitio web principal
├── assets/
│   ├── css/style.css           # Estilos
│   ├── js/main.js              # JavaScript
│   └── img/                    # Imágenes
│       ├── hero.png
│       └── album_cover.png
├── canciones/
│   └── cancion_01_ser_divino.md  # Letra + prompts Suno + prompt imagen
├── CLAUDE.md                   # Instrucciones del proyecto
└── README.md                   # Este archivo
```

---

## Canciones del Álbum

| # | Título | Inspirada en | Estado |
|---|--------|-------------|--------|
| 01 | **Ser Divino** | Creep — Radiohead | 🟡 En proceso |
| 02–10 | Próximamente | — | ⚪ Pendiente |

---

## Tecnologías

- **HTML5 / CSS3 / JavaScript** — Página web (sin frameworks)
- **Google Fonts** — Cormorant Garamond + Nunito
- **Suno AI** — Producción musical (instrucciones en cada `canciones/cancion_XX.md`)
- **GitHub Pages** — Despliegue automático
- **nano Banana / Midjourney** — Generación de imágenes

---

## Tareas Pendientes

### Página Web
- [ ] Activar links de YouTube conforme se suban los videos
- [ ] Agregar las 10 canciones completas en la sección de álbum
- [ ] Integrar reproductor de audio cuando estén listos los archivos

### Canciones
- [ ] Canción 01 — Ser Divino (Creep / Radiohead) — generar en Suno
- [ ] Canciones 02–10 — por definir

### Contenido
- [ ] Sección sobre cambio de creencias y neuroplasticidad musical (en web)
- [ ] Videos de YouTube activos

---

## Instrucciones para Agregar una Nueva Canción

Cuando se agregue una nueva canción al álbum:

1. Crear archivo `canciones/cancion_XX_nombre.md` con:
   - Análisis de la canción original
   - Letra transformada completa
   - Prompt Suno AI (música y estilo)
   - Prompt para imagen (nano Banana)
   - Estado del proceso

2. Agregar tarjeta en `index.html` dentro de `#songs-list`

3. Activar link de YouTube cuando el video esté disponible
