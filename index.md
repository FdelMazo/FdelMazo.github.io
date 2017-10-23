---
layout: default
---

<div class="call-outs-container">

{% for repo in site.posts %}

<pre> </pre>

<div class="call-out" style="background-color:{{repo.color}}">
  <h2>{{repo.title}}</h2>
  <a href="{{repo.link}}" title="{{repo.title}}">
  <img class="repo" src="{{repo.imagen}}">
  </a>
  <h4>
   {% if repo.type == "Collaboration" or repo.type == "Contribution" %}{{repo.type}}{% endif %}
   {% if repo.type == "Collaboration" %} with: <a href="{{repo.with_link}}" title="{{repo.with}}">{{repo.with}}</a>{% endif %}
   {% if repo.type == "Contribution" %} to: <a href="{{repo.with_link}}" title="{{repo.with}}">{{repo.with}}</a>{% endif %}      
  </h4>
  {% if repo.site %}<a href="{{repo.site}}" title="Website"><h4>Website</h4></a> {% endif %}
  <p>{{repo.tagline}}</p>
  <p>First Commit: {{repo.first_commit}}</p>
  <p>Language: {{repo.language}}</p>
</div>

<pre> </pre>

{% endfor %}

</div>
