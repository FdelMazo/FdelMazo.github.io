---
layout: default
---

{% for repository in site.github.public_repositories %}
* [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}

<div class="call-outs-container">

{% for repo in site.posts %}

<pre> </pre>

<div class="call-out" style="background-color:{{repo.color}}">
  <a href="{{repo.link}}" title="{{repo.title}}"><h2>{{repo.title}}</h2></a>
  <h4>
   {% if repo.type == "Collaboration" or repo.type == "Contribution" %}{{repo.type}}{% endif %}
   {% if repo.type == "Collaboration" %} with: <a href="{{repo.with_link}}" title="{{repo.with}}">{{repo.with}}</a>{% endif %}
   {% if repo.type == "Contribution" %} to: <a href="{{repo.with_link}}" title="{{repo.with}}">{{repo.with}}</a>{% endif %}      
  </h4>
  {% if repo.imagen %} <img src="{{repo.imagen}}"> {% endif %}
  {% if repo.site %}<a href="{{repo.site}}" title="Website"><h4>Website</h4></a> {% endif %}
  <p>{{repo.tagline}}</p>
  <p>First Commit: {{repo.first_commit}}</p>
  <p>Languaje: {{repo.languaje}}</p>
</div>

<pre> </pre>

{% endfor %}

</div>
