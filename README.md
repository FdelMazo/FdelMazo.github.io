### Instrucciones para actualizar la página web

Cualquier commit en el directorio raíz se auto-publica en la página al hacer push a la rama _master_. GitHub se encarga de ese proceso.

Para visualizar los cambios de manera local, se debe instalar Jekyll. En Windows se instala [así](https://jwillmer.de/blog/tutorial/how-to-install-jekyll-and-pages-gem-on-windows-10-x46), y para linux:

```
$ make build -> instala ruby, jekyll, bundler y los plugins del sitio. Necesita permisos elevados (sudo)
$ make serve -> ejecuta localmente el sitio para ver los cambios
```

### Como agregar o modificar un repositorio

Agregar en la carpeta _posts, con fecha de initial commit: 2017-01-01-titulorepo.md

Estos son los campos del frontmatter del repo. Con * los obligatorios:

```
---
type*: Project, Collaboration, Contribution 
title*: Mafal-Día
link*: https://github.com/FdelMazo/Mafal-Dia
site: https://fdelmazo.github.io/Mafal-Dia/
tagline*: Una historieta de Mafalda, todos los días
imagen*: /assets/img/mafal-dia.png
color: rgb(236, 112, 99)
first_commit*: 25/09/2017
latest_stable_release:
howtouse:
howtoinstall:
features:
si es collaboration o contribution -> with: y withlink:
language*: html
---
```
