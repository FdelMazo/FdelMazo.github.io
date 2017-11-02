build: 
	apt-get install ruby
	gem install jekyll bundler --conservative
	gem install bundler --conservative
	bundle install --path=../gems
	
serve:
	bundle exec jekyll serve --safe

