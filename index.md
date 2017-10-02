---
layout: default
---

<div class="call-outs-container">

{% for repo in site.posts %}

<pre> </pre>

<div class="call-out" style="background-color:{{repo.color}}">
  {% if repo.imagen %} <img src="{{repo.imagen}}"> {% endif %}
  <a href="{{repo.site}}" title="{{repo.title}}"><h4>{{repo.title}}</h4></a>
  <p>{{repo.tagline}}</p>
</div>

<pre> </pre>

{% endfor %}

</div>