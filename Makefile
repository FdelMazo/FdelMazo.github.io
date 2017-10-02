build: 
	apt-get install ruby ruby
	gem install jekyll bundler --conservative
	gem install bundler --conservative
	bundle install
	
serve:
	bundle exec jekyll serve --safe

