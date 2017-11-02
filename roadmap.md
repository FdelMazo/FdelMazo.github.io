# Cosas a hacer

WEB
- [ ] Contacto
- [ ] Ingles y castellano, default castellano. frontmatter con lang:eng e indexeng.md/indexspa.md
- [ ] Bien los html de hidden-xxs y responsive
- [ ] Sacar innecesario de css
- [ ] Hacer parecido a filmstruck.us y http://hernancasciari.com/ http://kogonada.com/
- [ ] https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design
- [ ] Links a otras redes como modulos, como youtube, con supercuts copados

### Instrucciones para actualizar la página web

Cualquier commit en el directorio raíz se auto-publica en la página al hacer push a la rama _master_. GitHub se encarga de ese proceso.

Para visualizar los cambios de manera local, se debe instalar Jekyll. En Windows se instala [así](https://jwillmer.de/blog/tutorial/how-to-install-jekyll-and-pages-gem-on-windows-10-x46), y para linux:

```
$ make build -> instala ruby, jekyll, bundler y los plugins del sitio. Necesita permisos elevados (sudo)
$ make serve -> ejecuta localmente el sitio para ver los cambios
```

