---
layout: default
---

{% for repo in site.data.repositories %}

<div class="call-outs-container">

<pre> </pre>

<div class="call-out" style="background-color:{{repo.color}}">
  <a href="{{repo.link}}"><h2>{{repo.title}}</h2></a>
  <img class="repo" src="{{repo.imagen}}">
  <p>{{repo.tagline}}</p>
</div>

<pre> </pre>

</div>



{% endfor %}
